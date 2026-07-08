# Deep relocation upgrade brief

User asked: add useful information on what is different to Germany (prices, sockets, insurance etc.), what to do for relocating (Anmeldung/authorities equivalent), and add helpful videos because Adam learns best by videos/visuals.

Keep the current premium dark astrolabe design. Do NOT make it bloated. Add a concise, practical "Germany → Dublin field manual" section and a compact video/visual learning section.

## Research findings to encode

Use these as short source-backed cards, not long paragraphs.

Official / trusted sources:
- Dublin.ie "How to move to Dublin in 10 steps": https://dublin.ie/live/relocating-to-dublin/move-to-dublin-10-steps/
  - Open a bank account; register for PPS; you usually cannot get PPS until you move to Dublin.
  - PPS needs proof of address, photo ID, and evidence why you need it (job offer/enrollment).
  - Get Leap card; Leap fares are cheaper than single tickets; Dublin.ie says up to 32% cheaper.
  - Driving licence can be applied for/exchanged after PPS; guide mentions taxation/insurance for driving.
- gov.ie PPS: https://www.gov.ie/en/department-of-social-protection/services/get-a-personal-public-service-pps-number/
  - Need basic MyGovID, identity document, proof of address, and evidence why you need PPS.
- Citizens Information PPS: https://www.citizensinformation.ie/en/social-welfare/irish-social-welfare-system/personal-public-service-number/
  - You cannot apply just because you intend to relocate; must be in Ireland / have reason.
- Revenue moving/returning to Ireland: https://www.revenue.ie/en/life-events-and-personal-circumstances/moving-to-or-from-ireland/moving-or-returning-to-ireland/index.aspx
  - Irish tax depends on residence status, where income comes from, where duties are performed, and domicile.
  - Employees pay through PAYE.
- TFI Leap: https://www.transportforireland.ie/fares/leap-card/ and https://about.leapcard.ie/about/fares-discounts
  - TFI Leap Card is prepaid public transport card, can save up to 31% / about 30% vs cash single fares.
- Healthcare source: https://www.citizensinformation.ie/en/moving-country/moving-to-ireland/introduction-to-the-irish-system/health-care-in-ireland/
  - Ireland has public healthcare plus optional private insurance; private insurance can reduce waiting/friction.
- Private health insurance source: https://www.citizensinformation.ie/en/returning-to-ireland/looking-after-your-health/returning-to-ireland-and-buying-private-health-insurance/
  - Consider waiting periods, pre-existing conditions, age-related loading.
- Electricity source: https://www.citizensinformation.ie/en/consumer/utilities/electricity-services/
  - In Ireland you choose/switch electricity suppliers; rental utilities need account transfer/setup.
- Plug/socket: Ireland uses Type G, 230V, 50Hz. Use an adapter for German Type C/F plugs. Source: https://www.worldstandards.eu/electricity/plug-voltage-by-country/ireland/
- Cost comparison: Dublin is significantly more expensive than many German cities, mainly rent. Source candidates:
  - Numbeo Dublin vs Berlin: https://www.numbeo.com/cost-of-living/compare_cities.jsp?country1=Ireland&city1=Dublin&country2=Germany&city2=Berlin
  - Use a caveat: crowd-sourced directional estimate, verify with real listings.

Key Germany -> Ireland differences to show:
- No German-style Anmeldung in the same form. Practical equivalent is: secure address/proof, create MyGovID, get PPS, register tax/PAYE with Revenue/employer, bank account, GP/health/insurance, utilities/tenancy docs.
- Sockets: Germany Type C/F vs Ireland Type G; voltage same 230V/50Hz; adapter needed, no transformer for normal modern electronics.
- Health insurance: Germany mandatory statutory/private system; Ireland public health system + optional private insurance, many people use private cover for faster access.
- Tax/admin: PPS is the key ID; PAYE via employer/Revenue; no Bürgeramt Anmeldung rhythm.
- Rent: Dublin housing pressure is the major shock; temporary landing base first, do not sign blind.
- Transport: Leap card early; public transport/cycle/walk routes matter more than map distance.
- Driving: left-hand traffic; EU licence exchange may be possible but insurance/driving admin differs.
- Utilities: choose suppliers, transfer electricity/gas/waste; know MPRN/GPRN when moving into long-term place.

## Video section

Add a compact section titled something like "Learn it visually" with 5 cards. Use embedded YouTube thumbnails/links or responsive iframes if tidy. Prefer simple clickable thumbnail cards to avoid bloat. Include source names as YouTube links. These are discovery links/results; label as "watch to understand", not as official legal source.

Videos found:
1. Official PPS application: "How to apply for a Personal Public Service Number on MyWelfare" — https://www.youtube.com/watch?v=f1B1X2yDjxU
2. PPS Dublin step-by-step: "How To Book PPS Number In Dublin Ireland" — https://www.youtube.com/watch?v=3_TYRKLNkXM
3. Leap Card guide: "LEAP Cards in Dublin | All you need to know" — https://www.youtube.com/watch?v=MF4kJkcxtlU
4. Leap visitor vs regular card: https://www.youtube.com/watch?v=_9KuKkxyxVg
5. Cost of living in Ireland 2025 / rent bills expenses: https://www.youtube.com/watch?v=cfDSH11eatA or Dublin cost guide https://www.youtube.com/watch?v=NG73drZ12kQ

Use thumbnail URLs like https://img.youtube.com/vi/VIDEO_ID/hqdefault.jpg locally/hotlinked okay for YouTube thumbnails, with link to video.

## Implementation constraints
- Preserve current concise/action-first tone.
- Add nav links if useful: "Differences" and "Videos".
- Add at most 2 new sections; total new content should be visual cards/tables, not paragraphs.
- Keep source section updated with the new official sources.
- Do not remove existing key sections.
- Run checks: node --check app.js; verify index contains PPS, Type G, MyGovID, PAYE, private insurance, Leap, video URLs, and source URLs.
- After edits, summarize files changed and verification.
