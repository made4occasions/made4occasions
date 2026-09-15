/**
 * MADE FOR OCCASIONS — SITE CONFIGURATION
 * -----------------------------------------------------------------------
 * Edit the values below to update contact details, pricing, service areas,
 * FAQs and number inventory across the ENTIRE website in one place.
 * -----------------------------------------------------------------------
 */
window.MFO_CONFIG = {

  business: {
    name: "Made for Occasions",
    shortName: "MFO",
    tagline: "Light up your special moments",
    phone: "07539 741696",
    phoneHref: "tel:+447539741696",
    email: "enquiries@made4occasions.co.uk",
    emailHref: "mailto:enquiries@made4occasions.co.uk",
    instagram: "https://www.instagram.com/made4occasions_/",
    instagramHandle: "@made4occasions_",
    facebook: "https://www.facebook.com/profile.php?id=61594058203903",
    tiktok: "https://www.tiktok.com/@made.4.occasions",
    serviceRegion: "Lancashire, Cheshire & Cumbria",
    baseTown: "Blackpool, Lancashire"
  },

  // Pre-launch notice, shown as a banner on the homepage. Set enabled: false
  // once the business is genuinely taking bookings and this no longer applies.
  // bookingsOpenDate drives the earliest date customers can select on the
  // enquiry form (see contact.html).
  launchNotice: {
    enabled: true,
    label: "5th October 2026",
    bookingsOpenDate: "2026-10-05" // ISO date (YYYY-MM-DD)
  },

  // Areas served — shown on the Delivery section and Contact page.
  serviceAreas: [
    "Blackpool",
    "Lytham St Annes",
    "Poulton-le-Fylde",
    "Thornton-Cleveleys",
    "Fleetwood",
    "Kirkham",
    "St Annes",
    "Preston",
    "Garstang",
    "Surrounding Lancashire areas"
  ],

  // Pricing — shared by numbers and letters (same rental price either way).
  pricing: {
    singleNumber: "£40",
    twoNumbers: "£60",
    note: "Final pricing may vary for larger combinations, custom lettering or delivery. Get in touch for an accurate quote."
  },

  // Product specification — shared by both numbers and letters, since they're
  // the same illuminated freestanding product line, just different characters.
  productSpecs: {
    height: "4ft",
    width: "Varies by number or word",
    power: "Fitted with bulbs and plugs into a standard mains socket — no special power setup needed.",
    hirePeriod: "Usually 1–2 days — exact timings are agreed with you based on your event.",
    indoorOutdoor: "Suitable for both indoor and outdoor use.",
    finish: "Warm-white illuminated bulbs, freestanding, professionally finished"
  },

  // Popular number combinations featured on the homepage — easy to extend.
  // Full number inventory — supports future automated availability checking.
  inventory: [
    { digit: "0", available: true, active: true },
    { digit: "1", available: true, active: true },
    { digit: "2", available: true, active: true },
    { digit: "3", available: true, active: true },
    { digit: "4", available: true, active: true },
    { digit: "5", available: true, active: true },
    { digit: "6", available: true, active: true },
    { digit: "7", available: true, active: true },
    { digit: "8", available: true, active: true },
    { digit: "9", available: true, active: true }
  ],

  // Standard illuminated word set — available to enquire about now. Like the
  // numbers, these are made to order once a booking is confirmed rather than
  // held ready-made — do not imply stock/same-day availability anywhere this
  // list is used. Custom wording is a separate, bespoke, additional-cost
  // option (see lettersCustomNote), not part of this standard set.
  letters: [
    { word: "BABY", available: true, active: true },
    { word: "BRIDE", available: true, active: true },
    { word: "MR & MRS", available: true, active: true },
    { word: "LOVE", available: true, active: true },
    { word: "ENGAGED", available: true, active: true }
  ],

  lettersCustomNote: "Want different wording? Custom lettering — a name, a date spelled out, or anything specific to your celebration — is available as a bespoke option at an additional cost on top of standard hire.",

  // FAQs — reused on the FAQ page and the homepage FAQ preview.
  faqs: [
    {
      q: "How big are the light-up numbers and letters?",
      a: "Our numbers and letters are large freestanding pieces designed to make a genuine impact in a room. They stand around 4ft tall, with width varying by number or word."
    },
    {
      q: "Do you deliver?",
      a: "We offer both collection and delivery. You're welcome to collect and return your hire yourself, or we can deliver, set up and collect it for you — whichever suits you, along with any delivery cost, is confirmed once you enquire."
    },
    {
      q: "Do you set the numbers up?",
      a: "Yes, as part of our delivery service — we position and check your numbers or letters at your venue before your event begins. If you'd rather collect and set up yourself, that's fine too; we'll make sure you know how before you leave."
    },
    {
      q: "How long is the hire period?",
      a: "Usually 1–2 days, but this is flexible — we'll agree the exact timings with you based on your event."
    },
    {
      q: "Can the numbers be used outside?",
      a: "Yes — our numbers and letters can be used both indoors and outdoors, so they're just as suited to a marquee or garden as they are to an indoor venue."
    },
    {
      q: "How do I book?",
      a: "Submit your number combination, event date, venue and contact details through our Check Availability form. We'll check availability and come back to you with pricing and next steps."
    },
    {
      q: "Do I need to pay a deposit?",
      a: "Yes — a booking payment is required to secure your date. We'll confirm the amount and how it's taken when we respond to your enquiry."
    },
    {
      q: "What happens if something is damaged?",
      a: "Full details are set out in our hire agreement, which is shared with you as part of the booking process. Please refer to this for terms covering loss or damage."
    },
    {
      q: "How far do you deliver?",
      a: "We're based in Blackpool and cover the Fylde coast and surrounding Lancashire areas as standard. Don't let distance put you off asking beyond that — just let us know your postcode and whether you'd like collection or delivery, and we'll confirm what's possible and any cost individually."
    },
    {
      q: "Can you provide numbers for weddings?",
      a: "Yes — our light-up numbers work beautifully as a wedding feature, whether that's a wedding date, anniversary number or a striking photo backdrop for your reception."
    },
    {
      q: "Can I hire a single number?",
      a: "Yes, single numbers are available to hire, subject to availability."
    },
    {
      q: "Do you hire illuminated letters as well as numbers?",
      a: "Yes. Alongside our numbers, we offer a standard word set — BABY, BRIDE, MR & MRS, LOVE and ENGAGED — with custom wording available as a bespoke option at an additional cost. As with our numbers, letters are made to order once a booking is confirmed rather than held ready-made, so it's worth enquiring as early as you can, especially for custom wording."
    },
    {
      q: "Can I hire a single letter or word?",
      a: "Yes, our standard words are hired as a complete piece (e.g. LOVE or BRIDE), subject to availability — just like our numbers, they're enquired about and booked in the same way."
    },
    {
      q: "Can I reserve a date?",
      a: "Dates are only secured once the required booking payment has been made. We'd recommend enquiring as early as possible for popular dates."
    }
  ],

  // Analytics placeholders — replace with real IDs when ready to go live. Do not
  // populate with fake IDs; leave blank ("") to keep tracking disabled.
  analytics: {
    googleAnalyticsId: "",   // e.g. "G-XXXXXXXXXX"
    googleSearchConsole: "", // verification meta content
    metaPixelId: "",         // e.g. "000000000000000"
    tiktokPixelId: ""        // e.g. "XXXXXXXXXXXXXXXXXXXX"
  }
};
