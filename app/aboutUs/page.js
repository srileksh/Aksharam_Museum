"use client";
import Footer from "@/components/home/Footer";
import Navbar from "@/components/home/Navbar";
import React, { useState } from "react";

function Page() {
  const [isMalayalam, setIsMalayalam] = useState(false);

  const englishHeading = "Aksharam Museum of Letter, Literature and Culture Vision and Mission";
  const malayalamHeading = "അക്ഷരം ഭാഷ-സാഹിത്യ-സാംസ്കാരിക മ്യൂസിയം ദര്‍ശനവും ദൗത്യവും";

  const englishText = `
  Language is one of the most powerful and beautiful cultural achievements of humanity. Be quiet for a moment and think about a world without language. When there is no way to say anything to anyone, the power of language becomes clear to us.
This museum provides a delightful journey through the knowledge and feelings behind the letters, words, sentences, texts, and objects that have evolved and shaped a different world and what humans have created for that world.
‘Aksharam Museum' will talk about the history of the development of the world of letters over thousands of years, the literary and artistic works that have enriched the cultural life of humans and their artistry.
This museum will be a place to collect, display, and preserve for posterity the specimens, works, tools, and machines created in different historical contexts, relating to the alphabet, language, literature, and culture.
 `;

  const malayalamText = `
  ഭാഷ മനുഷ്യവംശത്തിന്റെ സാംസ്കാരികനേട്ടങ്ങളില്‍ ഏറ്റവും ശക്തവും സുന്ദരവുമാണ്. ഒരുനിമിഷം നിശ്ശബ്ദമായി നിന്ന്, ഭാഷയില്ലാത്ത ലോകത്തെക്കുറിച്ച് ചിന്തിക്കൂ. ആരോടും ഒന്നും പറയാന്‍ മാര്‍ഗ്ഗമില്ലാത്ത അവസ്ഥ, ഭാഷയുടെ ശക്തി എന്തെന്ന് അപ്പോള്‍ വ്യക്തമാകും.
അക്ഷരങ്ങള്‍, വാക്കുകള്‍, വാക്യങ്ങള്‍, പാഠങ്ങള്‍, ..., ... എന്നിങ്ങനെ പടര്‍ന്ന്, വളര്‍ന്നു കയറി വേറിട്ട ലോകം രൂപപ്പെടുത്തിയതും ആ ലോകത്തിനുവേണ്ടി മനുഷ്യര്‍ സൃഷ്ടിച്ചതുമായ കാര്യങ്ങള്‍ക്കു പിന്നിലെ അറിവുകളിലേക്കും അനുഭൂതികളിലേക്കുമുള്ള ആഹ്ലാദകരമായ സഞ്ചാരം ഒരുക്കുന്നു, ഈ മ്യൂസിയം.
ആയിരക്കണക്കിനു വര്‍ഷങ്ങള്‍കൊണ്ട് അക്ഷരലോകം വികസിച്ചുവന്നതിന്റെ ചരിത്രത്തെയും മനുഷ്യന്റെ സാംസ്കാരികജീവിതത്തെ ധന്യമാക്കിയ സാഹിത്യ-കലാപ്രവര്‍ത്തനങ്ങളെയും അവയുടെ കലാപൂര്‍ണ്ണതയെയും കുറിച്ച്, ‘അക്ഷരം മ്യൂസിയം' പറയും. 
അക്ഷരം, ഭാഷ, സാഹിത്യം, സംസ്കാരം എന്നിവയുമായി ബന്ധപ്പെട്ട്, കാലത്തിന്റെ വിവിധ സന്ദര്‍ഭങ്ങളില്‍ രൂപപ്പെട്ട മാതൃകകള്‍, കൃതികള്‍, ഉപകരണങ്ങള്‍, യന്ത്രങ്ങള്‍ എന്നിവ ശേഖരിക്കുകയും പ്രദര്‍ശിപ്പിക്കുകയും സംരക്ഷിക്കുകയും ഭാവിതലമുറയ്ക്കുവേണ്ടി സൂക്ഷിക്കുകയും ചെയ്യുന്ന ഇടമായിരിക്കും, ഈ മ്യൂസിയം.
  `;

  return (
    <>
      <Navbar />

      <div className="relative min-h-screen xl:h-[1101px] w-full bg-[url('/museum.png')] bg-cover bg-center bg-no-repeat mt-[15px] sm:mt-[50px] lg:mt-[80px]">
        <div className="relative min-h-screen xl:h-[1101px] z-10 px-6 sm:px-10 pt-16 sm:pt-20 pb-20 bg-black/20">

          {/* 🔥 Heading Toggle */}
          <h1 className="text-white text-2xl sm:text-3xl font-bold mb-4">
            {isMalayalam ? malayalamHeading : englishHeading}
          </h1>

          {/* 🔥 Paragraph Toggle */}
          <p className="text-white text-[16px] sm:text-lg mt-[10px] leading-relaxed whitespace-pre-line drop-shadow-[0_4px_6px_rgba(0,0,0,1)]
">
            {isMalayalam ? malayalamText : englishText}
          </p>

          {/* 🌐 Stylish Toggle Button */}
          <button
            onClick={() => setIsMalayalam(!isMalayalam)}
            className="
              fixed right-6 bottom-6 
              py-[10px] px-[20px] 
              bg-white/90 text-black 
              font-semibold 
              rounded-full shadow-xl 
              backdrop-blur 
              hover:bg-amber-500 hover:text-white 
              transition-all duration-300 
              flex items-center gap-2
            "
          >
            {/* Icon change */}
            {isMalayalam ? "🌐 English" : "🌐 Malayalam"}
          </button>

        </div>
      </div>

      <Footer />
    </>
  );
}

export default Page;
