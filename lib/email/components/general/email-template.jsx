import {
  Body,
  Column,
  Container,
  Html,
  Img,
  Link,
  Row,
  Section,
  Tailwind,
} from "@react-email/components";

export function EmailTemplate({ content }) {
  return (
    <Html>
      <Tailwind>
        <>
          <Body
            className="m-0 h-full w-full justify-center bg-slate-100 p-6 text-center text-base font-medium text-slate-800"
            style={{
              fontFamily:
                "'Jost', 'Helvetica Neue', 'Segoe UI', 'Helvetica', 'sans-serif'",
            }}
          >
            <Section>
              <Link href="http://localhost:3000" target="_blank">
                <Img
                  alt="Fashio Store Logo"
                  className="mx-auto w-80"
                  src="https://res.cloudinary.com/abdullah1971/image/upload/v1721121176/admin-logo_yzjapi.png"
                />
              </Link>
            </Section>
            <Container className="mx-auto my-8 max-w-xl bg-white p-4 text-left">
              {content}
            </Container>

            <Section>
              <Row>
                <Column align="right" key="twitter">
                  <Link href="https://twitter.com/Fashio Store" target="_blank">
                    <Img
                      alt="Tw"
                      src="https://s3.eu-central-1.amazonaws.com/listmonk-Fashio Store/Twitter-transp.png"
                      title="Twitter"
                      width="32"
                    />
                  </Link>
                </Column>
                <Column align="center" className="w-20" key="github">
                  <Link href="https://Fashio Store.com/github" target="_blank">
                    <Img
                      alt="GitHub"
                      src="https://s3.eu-central-1.amazonaws.com/listmonk-Fashio Store/Github-transp.png"
                      title="GitHub"
                      width="32"
                    />
                  </Link>
                </Column>
                <Column align="left" key="discord">
                  <Link href="https://Fashio Store.com/discord" target="_blank">
                    <Img
                      alt="Discord"
                      src="https://s3.eu-central-1.amazonaws.com/listmonk-Fashio Store/Discord-transp.png"
                      title="Discord"
                      width="32"
                    />
                  </Link>
                </Column>
              </Row>
            </Section>
            <Section className="mt-4 text-center">
              Fashio Store {new Date().getFullYear()}. All rights reserved.
              <br />
              <Link href="http://localhost:3000" target="_blank">
                Imprint
              </Link>{" "}
              |{" "}
              <Link href="http://localhost:3000" target="_blank">
                Privacy Policy
              </Link>
            </Section>
          </Body>
        </>
      </Tailwind>
    </Html>
  );
}
