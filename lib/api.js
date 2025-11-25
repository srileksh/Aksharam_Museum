// lib/api.js

// Base is JUST the server root, no /api/public here.
const RAW_API_BASE =
  process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:5000";

// Normalize base: remove trailing slashes
const API_BASE = RAW_API_BASE.replace(/\/+$/, "");

/**
 * Join base URL + path safely:
 * - ensures exactly one "/" between them
 * - if `path` is an absolute URL, returns it as-is
 */
function buildUrl(path) {
  if (!path) return API_BASE;

  // If caller passes a full URL, don't prepend the base
  if (/^https?:\/\//i.test(path)) {
    return path;
  }

  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return `${API_BASE}${normalizedPath}`;
}

/**
 * Internal helper to parse server errors nicely
 */
async function parseErrorResponse(res) {
  const contentType = res.headers.get("content-type") || "";

  if (contentType.includes("application/json")) {
    try {
      return await res.json();
    } catch {
      return null;
    }
  }

  try {
    const text = await res.text();
    return text ? { message: text } : null;
  } catch {
    return null;
  }
}

/**
 * Simple GET helper for public endpoints
 * Usage: apiGet("/api/public/exhibitions?page=1&limit=12")
 */
export async function apiGet(path, options = {}) {
  const url = buildUrl(path);

  const res = await fetch(url, {
    cache: "no-store",
    ...options,
  });

  if (!res.ok) {
    const body = await parseErrorResponse(res);
    throw new Error(body?.message || `Failed to fetch ${path}`);
  }

  return res.json();
}

/**
 * Generic JSON helper if you need POST/PUT later
 */
export async function apiJson(path, method = "POST", body) {
  const url = buildUrl(path);

  const res = await fetch(url, {
    method,
    headers: {
      "Content-Type": "application/json",
    },
    body: body ? JSON.stringify(body) : undefined,
  });

  if (!res.ok) {
    const errorBody = await parseErrorResponse(res);
    throw new Error(errorBody?.message || "Request failed");
  }

  return res.json();
}