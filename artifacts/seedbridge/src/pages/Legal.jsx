import { Link } from "wouter";

// /privacy and /terms. Linked from sign-up (18+ and terms checkbox) and the footer.
const UPDATED = "24 October 2026";
const CONTACT = "abakahjoshua358@gmail.com";

function Section({ title, children }) {
  return <section className="mb-8">
      <h2 className="mb-3 font-serif text-2xl font-semibold text-foreground">{title}</h2>
      <div className="space-y-3 leading-relaxed text-muted-foreground">{children}</div>
    </section>;
}
const Mail = () => <a href={`mailto:${CONTACT}`} className="text-primary font-semibold hover:underline">{CONTACT}</a>;

function Privacy() {
  return <>
      <h1 className="font-serif text-4xl font-bold text-foreground">Privacy Policy</h1>
      <p className="mb-10 mt-2 text-sm text-muted-foreground">Last updated {UPDATED}</p>
      <Section title="Who we are">
        <p>SeedBridge connects farmers, buyers and drivers in Ghana to sell, buy and deliver produce. It is built by Abakah Joshua. Questions: <Mail />.</p>
      </Section>
      <Section title="What we collect">
        <ul className="list-disc space-y-2 pl-5">
          <li><b>Account details:</b> your name, phone number, email address, region, role (farmer, buyer or driver) and a hashed password.</li>
          <li><b>Listings:</b> the produce farmers list, with prices, quantities and harvest dates. Listings are public on the marketplace.</li>
          <li><b>Orders and deliveries:</b> what was ordered, by whom, delivery details and status. The farmer, buyer and driver on an order can see the order details they need to complete it.</li>
          <li><b>Payments:</b> online payments are processed by Paystack. We never see your card number or Mobile Money PIN; we keep the amount, status and reference.</li>
        </ul>
        <p>We don&apos;t sell your data or show ads.</p>
      </Section>
      <Section title="How we use it">
        <p>To run the marketplace: show listings, take orders and payments, arrange deliveries, help you reset your password, and keep the service safe.</p>
      </Section>
      <Section title="Where it is stored">
        <p>Data is stored in a MongoDB Atlas database and served from Render, over HTTPS. Passwords are hashed.</p>
      </Section>
      <Section title="Your choices">
        <p>You can delete your listings at any time. To delete your account, email <Mail /> from the email address on your account. Records of completed orders and payments are kept as the law requires.</p>
      </Section>
      <Section title="Age">
        <p>SeedBridge is for people aged 18 or older.</p>
      </Section>
      <Section title="Changes">
        <p>We&apos;ll update this page if our practices change and show the new date at the top.</p>
      </Section>
    </>;
}

function Terms() {
  return <>
      <h1 className="font-serif text-4xl font-bold text-foreground">Terms of Use</h1>
      <p className="mb-10 mt-2 text-sm text-muted-foreground">Last updated {UPDATED}</p>
      <Section title="Using SeedBridge">
        <p>By creating an account you agree to these terms and our <Link href="/privacy" className="text-primary font-semibold hover:underline">Privacy Policy</Link>. You must be <b>18 or older</b>, because buying and selling on SeedBridge creates real agreements and payments.</p>
      </Section>
      <Section title="Listings and orders">
        <ul className="list-disc space-y-2 pl-5">
          <li>Farmers must describe produce honestly (type, quantity, quality, harvest date and price) and only list what they can supply.</li>
          <li>The price shown when you order is what you pay. Payments are processed by Paystack.</li>
          <li>Buyers, farmers and drivers deal with each other directly about quality and delivery. Contact us if something goes wrong and we will help where we can.</li>
        </ul>
      </Section>
      <Section title="Acceptable use">
        <p>Don&apos;t post false or misleading listings, harass other users, try to avoid payments, or access other people&apos;s accounts or data. Only upload photos and descriptions you have the right to use. We may remove listings and suspend accounts that break these terms.</p>
      </Section>
      <Section title="Copyright complaints">
        <p>If a listing uses your photo or text without permission, email <Mail /> with a link to the listing, the work you own, your contact details, and a statement that you believe in good faith the use is not authorised. We remove infringing content promptly and close the accounts of repeat infringers.</p>
      </Section>
      <Section title="No guarantee">
        <p>SeedBridge is provided as it is. We may change, pause or stop features at any time.</p>
      </Section>
      <Section title="Contact">
        <p><Mail /></p>
      </Section>
    </>;
}

function LegalPage({ page = "privacy" }) {
  return <div className="mx-auto w-full max-w-3xl px-4 py-10 md:py-16">
      {page === "terms" ? <Terms /> : <Privacy />}
    </div>;
}
export {
  LegalPage
};
