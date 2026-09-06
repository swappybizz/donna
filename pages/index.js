import { useState } from "react";
import Head from "next/head";
import { AnimatePresence, motion } from "framer-motion";
import {
  FiChevronDown as ChevronDown,
  FiChevronUp as ChevronUp,
  FiFacebook as Facebook,
  FiMapPin as MapPin,
  FiMenu as Menu,
  FiMessageCircle as MessageCircle,
  FiPhone as Phone,
  FiX as X,
} from "react-icons/fi";

const treatments = [
  {
    number: "01",
    title: "Cryolipolyse",
    text: "Målrettet fettreduserende behandling for områder du ønsker å forbedre.",
  },
  {
    number: "02",
    title: "40K Kavitasjon",
    text: "Skånsom kroppsforming tilpasset dine ønsker og behov.",
  },
  {
    number: "03",
    title: "Radiofrekvens",
    text: "Behandling for stramming av hud hvor fasthet og glød står i fokus.",
  },
  {
    number: "04",
    title: "Lipo Laser",
    text: "En skånsom behandling som kan inngå i en personlig tilpasset plan.",
  },
];

const values = [
  {
    number: "01",
    title: "Mitt mål",
    text: "Å hjelpe kvinnersærlig mødre og dem som ofte setter andre førstmed å gjøre plass til egenpleie og møte kroppen sin med mer omsorg og selvtillit.",
  },
  {
    number: "02",
    title: "Vår misjon",
    text: "Å tilby gjennomtenkte, personlige og tilgjengelige behandlinger og hudpleie som støtter en sunn livsstil og hjelper hver kunde å føle seg sett, trygg og ivaretatt.",
  },
  {
    number: "03",
    title: "Vår visjon",
    text: "Å bygge BLANCÉ LUXE til et anerkjent, inkluderende skjønnhets- og velværemerkemed røtter i omsorg, kvalitet og troen på at selvtillit er for enhver kropp.",
  },
];

const experienceSteps = [
  {
    number: "01",
    title: "Vi lytter først",
    text: "En åpen samtale om dine ønsker, helseopplysninger og forventninger.",
  },
  {
    number: "02",
    title: "Vi tilpasser",
    text: "Behandlingsområdet og planen vurderes individueltingen standardløsning for alle.",
  },
  {
    number: "03",
    title: "Vi følger opp",
    text: "Tydelig veiledning før og etter behandlingen, med trygghet og komfort i fokus.",
  },
];

const faqItems = [
  {
    question: "Når åpner BLANCÉ LUXE?",
    answer:
      "Vi åpner snart i Ålesund. Meld interesse via SMS, så får du informasjon når introduksjonspriser og de første timene blir tilgjengelige.",
  },
  {
    question: "Hvordan finner vi riktig behandling?",
    answer:
      "Vi starter med en rolig samtale om dine ønsker og vurderer hva som passer best for deg.",
  },
  {
    question: "Er dette en behandling for vektnedgang?",
    answer:
      "Behandlingene er kosmetiske kroppsformingsbehandlinger og erstatter ikke et sunt kosthold, bevegelse eller medisinsk veiledning.",
  },
  {
    question: "Er resultatene like for alle?",
    answer:
      "Resultater varierer fra person til person. Egnethet vurderes individuelt før behandling.",
  },
];

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 28,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.72,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

function LuxeLogo({ light = false }) {
  return (
    <div className="flex items-center">
      <img
        src="/blanceluxe.png"
        alt="BLANCÉ LUXE"
        className={`h-auto w-[138px] object-contain ${light ? "brightness-0 invert" : ""
          }`}
      />
    </div>
  );
}

function SectionLabel({ children, light = false }) {
  return (
    <p
      className={`mb-4 text-[10px] font-bold uppercase tracking-[0.23em] ${light ? "text-[#d4b976]" : "text-[#5e594d]"
        }`}
    >
      {children}
    </p>
  );
}

function AccordionItem({ item, isOpen, onClick }) {
  return (
    <div className="border-b border-[#cfc7ae]">
      <button
        type="button"
        onClick={onClick}
        className="flex w-full items-center justify-between gap-6 py-4 text-left font-serif text-[21px] leading-[1.08] text-[#1d1a17]"
      >
        <span>{item.question}</span>

        {isOpen ? (
          <ChevronUp size={18} className="shrink-0 text-[#b28b3b]" />
        ) : (
          <ChevronDown size={18} className="shrink-0 text-[#b28b3b]" />
        )}
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28 }}
            className="overflow-hidden"
          >
            <p className="max-w-xl pb-5 text-sm leading-6 text-[#686256]">
              {item.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function MarqueeContent() {
  return (
    <>
      <span>Body contouring</span>
      <span className="text-[#cba758]">✦</span>
      <span>Confidence</span>
      <span className="text-[#cba758]">✦</span>
      <span>Beauty & Wellness Hub</span>
      <span className="text-[#cba758]">✦</span>
      <span>Aesthetics </span>
      <span className="text-[#cba758]">✦</span>
    </>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);
  const [interest, setInterest] = useState("");

  const scrollTo = (id) => {
    setMenuOpen(false);

    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const handleSms = (event) => {
    event.preventDefault();

    const message = encodeURIComponent(
      `Hei! Jeg ønsker informasjon om ${interest || "åpningstilbud"
      } hos BLANCÉ LUXE.`
    );

    window.location.href = `sms:+4794447495?body=${message}`;
  };

  return (
    <>
      <Head>
        <title>BLANCÉ LUXE  Ålesund</title>
        <meta
          name="description"
          content="Personlig kroppsforming og egenpleie i rolige, eksklusive omgivelser."
        />
      </Head>

      <main className="overflow-hidden bg-[#fffef0] text-[#181512]">
        <header className="sticky top-0 z-40 border-b border-[#ebe5d1] bg-[#fffef0]/95 backdrop-blur-md">
          <div className="mx-auto flex h-[112px] max-w-7xl items-center justify-between px-7 sm:px-10 lg:h-[100px] lg:px-16">
            <button
              type="button"
              onClick={() => scrollTo("top")}
              aria-label="Gå til toppen"
              className="transition-transform hover:scale-105"
            >
              <LuxeLogo />
            </button>

            <nav className="hidden items-center gap-8 text-[10px] font-bold uppercase tracking-[0.18em] lg:flex">
              <button
                type="button"
                onClick={() => scrollTo("behandlinger")}
                className="transition-colors hover:text-[#ad8535]"
              >
                Behandlinger
              </button>

              <button
                type="button"
                onClick={() => scrollTo("verdier")}
                className="transition-colors hover:text-[#ad8535]"
              >
                Om oss
              </button>

              <button
                type="button"
                onClick={() => scrollTo("kontakt")}
                className="transition-colors hover:text-[#ad8535]"
              >
                Kontakt
              </button>
            </nav>

            <button
              type="button"
              onClick={() => setMenuOpen(true)}
              aria-label="Åpne meny"
              className="grid h-11 w-11 place-items-center lg:hidden"
            >
              <Menu size={34} />
            </button>

            <button
              type="button"
              onClick={() => scrollTo("kontakt")}
              className="hidden bg-[#0e0d0c] px-6 py-3 text-[10px] font-bold uppercase tracking-[0.16em] text-white transition-colors hover:bg-[#af8939] lg:block"
            >
              Få åpningstilbud
            </button>
          </div>
        </header>

        <AnimatePresence>
          {menuOpen && (
            <motion.aside
              initial={{ opacity: 0, x: "100%" }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: "100%" }}
              transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
              className="fixed inset-0 z-50 bg-[#0e0d0c] px-7 py-8 text-[#fffef0]"
            >
              <div className="flex items-start justify-between">
                <LuxeLogo light />

                <button
                  type="button"
                  aria-label="Lukk meny"
                  onClick={() => setMenuOpen(false)}
                >
                  <X size={33} />
                </button>
              </div>

              <div className="mt-20 flex flex-col gap-8 font-serif text-5xl">
                <button
                  type="button"
                  onClick={() => scrollTo("behandlinger")}
                  className="text-left"
                >
                  Behandlinger
                </button>

                <button
                  type="button"
                  onClick={() => scrollTo("verdier")}
                  className="text-left"
                >
                  Om oss
                </button>

                <button
                  type="button"
                  onClick={() => scrollTo("kontakt")}
                  className="text-left"
                >
                  Kontakt
                </button>
              </div>

              <button
                type="button"
                onClick={() => scrollTo("kontakt")}
                className="mt-16 w-full bg-[#b48c3d] py-5 text-xs font-bold uppercase tracking-[0.15em] text-[#17130e]"
              >
                Få åpningstilbud
              </button>
            </motion.aside>
          )}
        </AnimatePresence>

        <section
          id="top"
          className="relative mx-auto min-h-[670px] max-w-7xl px-7 pb-20 pt-20 sm:px-10 lg:flex lg:min-h-[720px] lg:items-center lg:px-16"
        >
          <div className="pointer-events-none absolute left-[-150px] top-[210px] h-[315px] w-[315px] rounded-full border border-[#e3d8b8] sm:left-[5%] lg:left-[42%]" />
          <div className="pointer-events-none absolute bottom-[-90px] left-[75px] h-[240px] w-[240px] rounded-full border border-[#eee5c9] lg:bottom-[0] lg:left-[58%]" />

          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="relative z-10 max-w-4xl"
          >
            <div className="mb-10 flex items-center gap-4">
              <span className="h-px w-9 bg-[#1b1713]" />
              <span className="text-[10px] font-bold uppercase tracking-[0.24em]">
                Åpner snart i Ålesund
              </span>
            </div>

            <h1 className="font-serif text-[59px] leading-[0.9] tracking-[-0.06em] sm:text-7xl lg:text-[91px]">
              <em className="font-normal text-[#b38d3d]">
                Confidence for
                <br />
                Every Body.
              </em>
              <br />
              Reveal Your Glow.
              <br />
              Renew Your Confidence.
            </h1>

            <p className="mt-10 max-w-xl text-[19px] leading-9 text-[#716b5e]">
              Personlig kroppsforming og egenpleie i rolige, eksklusive
              omgivelserskapt for å hjelpe deg føle deg vel i din egen kropp.
            </p>

            <button
              type="button"
              onClick={() => scrollTo("kontakt")}
              className="mt-10 inline-flex items-center gap-7 bg-[#0e0d0c] px-7 py-6 text-base font-bold text-white transition-all hover:-translate-y-1 hover:bg-[#af8939]"
            >
              Få åpningstilbud
              <span className="text-3xl font-normal">→</span>
            </button>
          </motion.div>
        </section>

        <section className="hidden md:block overflow-hidden border-y border-[#1b1713] bg-[#0e0d0c] py-3 text-[#f6f0df]">
          <motion.div
            animate={{}}
            transition={{
              duration: 22,
              ease: "linear",
              repeat: Infinity,
            }}
            className="flex w-max items-center"
          >
            <div
              aria-label="Body contouring, confidence, beauty and wellness hub"
              className="flex shrink-0 items-center gap-7 whitespace-nowrap px-[14px] text-[8px] font-bold uppercase tracking-[0.24em] sm:gap-9"
            >
              <MarqueeContent />
            </div>

            <div
              aria-hidden="true"
              className="flex shrink-0 items-center gap-7 whitespace-nowrap px-[14px] text-[8px] font-bold uppercase tracking-[0.24em] sm:gap-9"
            >
              <MarqueeContent />
            </div>
          </motion.div>
        </section>
        <section className="border-y border-[#1b1713] bg-[#0e0d0c] px-5 py-5 text-[#f6f0df] md:hidden">
          <div className="grid grid-cols-2 border-l border-t border-[#39352d]">
            <div className="flex min-h-[78px] items-center justify-center border-b border-r border-[#39352d] px-4 text-center text-[8px] font-bold uppercase leading-4 tracking-[0.18em]">
              Body contouring
            </div>

            <div className="flex min-h-[78px] items-center justify-center gap-3 border-b border-r border-[#39352d] px-4 text-center text-[8px] font-bold uppercase leading-4 tracking-[0.18em]">
              <span className="text-[#cba758]">✦</span>
              <span>Confidence</span>
            </div>

            <div className="flex min-h-[78px] items-center justify-center gap-3 border-b border-r border-[#39352d] px-4 text-center text-[8px] font-bold uppercase leading-4 tracking-[0.18em]">
              <span>Beauty &amp; Wellness Hub</span>
              <span className="text-[#cba758]">✦</span>
            </div>

            <div className="flex min-h-[78px] items-center justify-center gap-3 border-b border-r border-[#39352d] px-4 text-center text-[8px] font-bold uppercase leading-4 tracking-[0.18em]">
              <span className="text-[#cba758]">✦</span>
              <span>Aesthetics</span>
            </div>
          </div>
        </section>

        <section
          id="behandlinger"
          className="mx-auto max-w-7xl px-7 py-20 sm:px-10 lg:px-16 lg:py-28"
        >
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={fadeUp}
          >
            <SectionLabel>Våre behandlinger</SectionLabel>

            <h2 className="max-w-2xl font-serif text-5xl leading-[0.93] tracking-[-0.055em] sm:text-6xl">
              Målrettet behandling.
              <br />
              <em>Personlig tilpasset.</em>
            </h2>

            <p className="mt-8 max-w-lg text-base leading-7 text-[#716b5e]">
              Vi vurderer alltid med samtale og veiledning før en behandling,
              slik at du får et trygt, rolig møte med hva som passer for deg.
            </p>
          </motion.div>

          <div className="mt-16 grid border-l border-t border-[#e2dcc6] md:grid-cols-2 lg:grid-cols-4">
            {treatments.map((treatment, index) => (
              <motion.article
                key={treatment.number}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="min-h-[265px] border-b border-r border-[#e2dcc6] p-7"
              >
                <span className="text-sm text-[#b38d3d]">
                  {treatment.number}
                </span>

                <span className="mt-8 block text-lg leading-none text-[#b38d3d]">
                  ✦
                </span>

                <h3 className="mt-8 font-serif text-3xl tracking-[-0.04em]">
                  {treatment.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-[#716b5e]">
                  {treatment.text}
                </p>

                <button
                  type="button"
                  onClick={() => scrollTo("kontakt")}
                  className="mt-4 text-xs font-bold underline underline-offset-4"
                >
                  Vis interesse →
                </button>
              </motion.article>
            ))}
          </div>

          <p className="mt-7 text-sm text-[#37322b]">
            Introduksjonspriser og pakkeløsninger kommer snart.
          </p>
        </section>

        <section
          id="historie"
          className="mx-auto max-w-7xl px-7 py-24 sm:px-10 lg:grid lg:grid-cols-[1.08fr_0.92fr] lg:gap-24 lg:px-16 lg:py-32"
        >
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.12 }}
            variants={fadeUp}
          >
            <SectionLabel>Min historie – hjertet bak BLANCÉ LUXE</SectionLabel>

            <h2 className="max-w-2xl font-serif text-5xl leading-[0.94] tracking-[-0.055em] sm:text-6xl">
              Fra å ta vare på andre
              <br />
              <em>til å skape rom for deg.</em>
            </h2>

            <div className="mt-8 max-w-xl space-y-5 text-[16px] leading-8 text-[#686256]">
              <p>
                Jeg heter Dona. Jeg er kvinne, mor og har gjennom mange år
                arbeidet med å ta vare på andre. Omsorg har alltid vært en stor
                del av hvem jeg er, men min egen livsreise lærte meg også hvor
                lett det er å sette seg selv sist.
              </p>

              <p>
                Jeg vet hvordan kroppen og selvtilliten kan forandre seg gjennom
                ulike kapitler i livet. Derfor skapte jeg BLANCÉ LUXE: et varmt
                og inkluderende sted der kvinner kan prioritere seg selv, føle
                seg sett og finne tilbake til tryggheten i egen kropp.
              </p>

              <p>
                For meg handler dette ikke om å bli en annen. Det handler om å
                ta vare på den du allerede ermed behandlinger, veiledning og
                egenpleie som føles personlig, oppnåelig og meningsfull.
              </p>
            </div>
          </motion.div>

          <motion.aside
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.65 }}
            className="mt-16 border border-[#ded3b6] p-5 sm:p-8 lg:mt-0"
          >
            <div className="flex min-h-[410px] flex-col items-center justify-center border border-[#e8dfc5] bg-[#fffced] p-8 text-center">
              <LuxeLogo />

              <p className="mt-10 font-serif text-[29px] leading-[1.12] italic tracking-[-0.035em] text-[#2a251d]">
                Made for you.
                <br />
                Made with care.
              </p>

              <p className="mt-7 max-w-xs text-sm leading-6 text-[#6e6759]">
                Et sted for personlig omsorg, trygg veiledning og en følelse av
                å være vel i deg selv.
              </p>
            </div>
          </motion.aside>
        </section>

        <section id="verdier" className="px-7 py-20 sm:px-10 lg:px-16 lg:py-28">
          <div className="mx-auto max-w-7xl">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              variants={fadeUp}
            >
              <SectionLabel>Det BLANCÉ LUXE står for</SectionLabel>

              <h2 className="max-w-2xl font-serif text-5xl leading-[0.94] tracking-[-0.055em] sm:text-6xl">
                Omsorg med <em>en tydelig retning.</em>
              </h2>
            </motion.div>

            <div className="mt-14 grid border-l border-t border-[#dcd3b9] lg:grid-cols-3">
              {values.map((value, index) => (
                <motion.article
                  key={value.number}
                  initial={{ opacity: 0, y: 22 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.12 }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className="min-h-[320px] border-b border-r border-[#dcd3b9] p-7 sm:p-9"
                >
                  <span className="text-lg text-[#b38d3d]">
                    {value.number}
                  </span>

                  <h3 className="mt-8 font-serif text-4xl tracking-[-0.04em]">
                    {value.title}
                  </h3>

                  <p className="mt-6 text-base leading-8 text-[#686256]">
                    {value.text}
                  </p>
                </motion.article>
              ))}
            </div>

            <p className="mx-auto mt-14 max-w-xl text-center font-serif text-2xl leading-8 italic text-[#b38d3d]">
              Confidence for Every Body. Reveal Your Glow. Renew Your
              Confidence.
            </p>
          </div>
        </section>

        <section className="bg-[#0e0d0c] px-7 py-20 text-[#faf5e7] sm:px-10 lg:px-16 lg:py-28">
          <div className="mx-auto max-w-7xl">
            <SectionLabel light>Din opplevelse</SectionLabel>

            <h2 className="font-serif text-5xl leading-[0.93] tracking-[-0.055em] sm:text-6xl">
              Rolig. Personlig.
              <br />
              <em className="text-[#d8b872]">Gjennomtenkt.</em>
            </h2>

            <div className="mt-12 grid border-t border-[#39352d] lg:grid-cols-3">
              {experienceSteps.map((step) => (
                <article
                  key={step.number}
                  className="border-b border-[#39352d] py-8 lg:border-b-0 lg:border-r lg:px-9 lg:first:pl-0"
                >
                  <span className="text-sm text-[#d8b872]">{step.number}</span>

                  <h3 className="mt-5 font-serif text-3xl">{step.title}</h3>

                  <p className="mt-4 max-w-xs text-sm leading-6 text-[#d3cdc0]">
                    {step.text}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-7 py-20 sm:px-10 lg:grid lg:grid-cols-[0.8fr_1.2fr] lg:gap-24 lg:px-16 lg:py-28">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <SectionLabel>Før du tar kontakt</SectionLabel>

            <h2 className="font-serif text-5xl tracking-[-0.05em]">
              Vanlige spørsmål
            </h2>
          </motion.div>

          <div className="mt-10 border-t border-[#bfb69e] lg:mt-0">
            {faqItems.map((item, index) => (
              <AccordionItem
                key={item.question}
                item={item}
                isOpen={openFaq === index}
                onClick={() => setOpenFaq(openFaq === index ? -1 : index)}
              />
            ))}
          </div>
        </section>

        <section className="bg-[#efe7cc] px-7 py-10 sm:px-10 lg:px-16">
          <div className="mx-auto max-w-7xl text-xs leading-5 text-[#4f493e]">
            <p>
              <strong>Viktig informasjon:</strong> Behandlingene er kosmetiske
              kroppsformingsbehandlinger og erstatter ikke et sunt kosthold,
              bevegelse eller medisinsk veiledning. Resultater og opplevelse
              varierer fra person til person. Egnethet vurderes individuelt før
              behandling.
            </p>

            <p className="mt-4">
              <strong>Personvern:</strong> Nettsiden bruker ingen
              kontaktskjema-database eller sporingscookies. Når du velger «Send
              som SMS», åpnes meldingsappen på enheten din. Opplysningene sendes
              først når du selv trykker «Send», og behandles kun for å svare på
              henvendelsen din.
            </p>
          </div>
        </section>

        <section
          id="kontakt"
          className="mx-auto max-w-7xl px-7 py-24 sm:px-10 lg:grid lg:grid-cols-[0.9fr_1.1fr] lg:gap-24 lg:px-16 lg:py-32"
        >
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <SectionLabel>Kontakt og booking</SectionLabel>

            <h2 className="font-serif text-5xl leading-[0.93] tracking-[-0.055em] sm:text-6xl">
              Vær blant de første.
            </h2>

            <p className="mt-6 max-w-md text-lg leading-8 text-[#716b5e]">
              Vi åpner snart i Ålesund. Ta kontakt for spørsmål, veiledning
              eller for å melde interesse for introduksjonstilbud.
            </p>

            <div className="mt-7 flex items-center gap-3 text-[#716b5e]">
              <MapPin size={19} className="text-[#a98234]" />
              <span>Ålesund, Norge</span>
            </div>

            <div className="mt-10 divide-y divide-[#d9d1ba] border-y border-[#d9d1ba]">
              <a
                href="tel:+4794447495"
                className="flex items-center gap-5 py-6 transition-colors hover:text-[#ad8535]"
              >
                <Phone size={21} className="text-[#b38d3d]" />

                <span>
                  <span className="block text-[10px] font-bold uppercase tracking-[0.18em] text-[#777064]">
                    Ring oss
                  </span>
                  <span className="mt-1 block text-lg">+47 94 44 74 95</span>
                </span>
              </a>

              <a
                href="sms:+4794447495"
                className="flex items-center gap-5 py-6 transition-colors hover:text-[#ad8535]"
              >
                <MessageCircle size={21} className="text-[#b38d3d]" />

                <span>
                  <span className="block text-[10px] font-bold uppercase tracking-[0.18em] text-[#777064]">
                    SMS
                  </span>
                  <span className="mt-1 block text-lg">
                    Send en tekstmelding
                  </span>
                </span>
              </a>

              <a
                href="#"
                onClick={(event) => event.preventDefault()}
                className="flex items-center gap-5 py-6 transition-colors hover:text-[#ad8535]"
              >
                <Facebook size={21} className="text-[#b38d3d]" />

                <span>
                  <span className="block text-[10px] font-bold uppercase tracking-[0.18em] text-[#777064]">
                    Facebook
                  </span>
                  <span className="mt-1 block text-lg">
                    Følg BLANCÉ LUXE
                  </span>
                </span>
              </a>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            onSubmit={handleSms}
            className="mt-16 bg-white p-7 shadow-[0_18px_55px_rgba(85,69,29,0.08)] sm:p-10 lg:mt-0"
          >
            <label className="block">
              <span className="text-[10px] font-bold uppercase tracking-[0.18em]">
                Navn
              </span>

              <input
                required
                type="text"
                placeholder="Ditt navn"
                className="mt-4 w-full border-b border-[#d9d5cc] bg-transparent py-3 text-lg outline-none placeholder:text-[#aaa49a] focus:border-[#ae8838]"
              />
            </label>

            <label className="mt-8 block">
              <span className="text-[10px] font-bold uppercase tracking-[0.18em]">
                Mobil eller e-post
              </span>

              <input
                required
                type="text"
                placeholder="Mobilnummer eller e-postadresse"
                className="mt-4 w-full border-b border-[#d9d5cc] bg-transparent py-3 text-lg outline-none placeholder:text-[#aaa49a] focus:border-[#ae8838]"
              />
            </label>

            <label className="mt-8 block">
              <span className="text-[10px] font-bold uppercase tracking-[0.18em]">
                Hva er du interessert i?
              </span>

              <select
                value={interest}
                onChange={(event) => setInterest(event.target.value)}
                className="mt-4 w-full border-b border-[#d9d5cc] bg-transparent py-3 text-lg text-[#625d52] outline-none focus:border-[#ae8838]"
              >
                <option value="">Velg behandling</option>

                {treatments.map((treatment) => (
                  <option key={treatment.title} value={treatment.title}>
                    {treatment.title}
                  </option>
                ))}

                <option value="Åpningstilbud">Åpningstilbud</option>
              </select>
            </label>

            <button
              type="submit"
              className="mt-8 flex w-full items-center justify-center gap-3 bg-[#0e0d0c] py-5 text-sm font-bold text-white transition-colors hover:bg-[#af8939]"
            >
              Send som SMS
              <MessageCircle size={19} />
            </button>

            <p className="mt-5 text-center text-xs leading-5 text-[#898277]">
              Når du fortsetter, åpnes telefonens meldingsapp. Ingen
              helseopplysninger lagres på denne nettsiden.
            </p>
          </motion.form>
        </section>

        <footer className="bg-[#0e0d0c] px-7 py-14 text-center text-[#faf4e4] sm:px-10">
          <LuxeLogo light />

          <p className="mt-7 text-sm">
            Beauty & Wellness Hub · Ålesund ·{" "}
            <a
              href="tel:+4794447495"
              className="underline underline-offset-4"
            >
              +47 94 44 74 95
            </a>
          </p>

          <div className="mt-5 flex items-center justify-center gap-2 text-xs text-[#cfc7b7]">
            <span className="underline underline-offset-4">Personvern</span>
            <span>•</span>
            <span>© 2026 BLANCÉ LUXE</span>
          </div>
        </footer>
      </main>
    </>
  );
}