import Stack from "react-bootstrap/Stack";
import Card from "react-bootstrap/Card";
import Figure from "react-bootstrap/Figure";
import Accordion from "react-bootstrap/Accordion";
import AccordionHeader from "react-bootstrap/esm/AccordionHeader";
import AccordionItem from "react-bootstrap/esm/AccordionItem";

const Event = (props) => {
  const bands = props.bands;
  const type = props.type;
  let eventKey = 0;

  const shania = [
    {
      name: "Shania Twain: Queen Of Me Tour",
      type: "event",
      id: "G5eVZ94L3b7SJ",
      test: false,
      url: "https://concerts.livenation.com/shania-twain-queen-of-me-tour-charlotte-north-carolina-06-28-2023/event/2D005D57D2604CE6",
      locale: "en-us",
      images: [
        {
          ratio: "3_2",
          url: "https://s1.ticketm.net/dam/a/1d1/47cc9b10-4904-4dec-b1d6-539e44a521d1_1825531_RETINA_PORTRAIT_3_2.jpg",
          width: 640,
          height: 427,
          fallback: false,
        },
        {
          ratio: "16_9",
          url: "https://s1.ticketm.net/dam/a/1d1/47cc9b10-4904-4dec-b1d6-539e44a521d1_1825531_EVENT_DETAIL_PAGE_16_9.jpg",
          width: 205,
          height: 115,
          fallback: false,
        },
      ],
      sales: {},
      dates: {
        start: {
          localDate: "2023-06-28",
          localTime: "19:30:00",
          dateTime: "2023-06-28T23:30:00Z",
          dateTBD: false,
          dateTBA: false,
          timeTBA: false,
          noSpecificTime: false,
        },
      },
      classifications: [],
      promoter: {},
      promoters: [],
      info: "Show 7:30pm. This is an outdoor venue with portions of the reserved seats under cover. The show will take place rain or shine. All dates, acts, & ticket prices subject to change without notice. All tickets are subject to applicable service fees via all points of sale. Children under 2 are free as long as they don't take up a seat.",
      pleaseNote:
        "Show 7:30pm. This is an outdoor venue with portions of the reserved seats under cover. The show will take place rain or shine. All dates, acts, & ticket prices subject to change without notice. All tickets are subject to applicable service fees via all points of sale. Children under 2 are free as long as they don't take up a seat.",
      priceRanges: [],
      products: [],
      seatmap: {},
      accessibility: {},
      ticketLimit: {},
      ageRestrictions: {},
      ticketing: {},
      _links: {},
      _embedded: {
        venues: [
          {
            name: "PNC Music Pavilion",
            type: "venue",
            id: "KovZpZAEkeJA",
            test: false,
            url: "https://www.ticketmaster.com/pnc-music-pavilion-tickets-charlotte/venue/368716",
            locale: "en-us",
            aliases: [],
            images: [],
            postalCode: "28262",
            timezone: "America/New_York",
            city: {
              name: "Charlotte",
            },
            state: {
              name: "North Carolina",
              stateCode: "NC",
            },
            country: {
              name: "United States Of America",
              countryCode: "US",
            },
            address: {
              line1: "707 Pavilion Boulevard",
            },
          },
        ],
      },
    },
  ];

  return (
    <Accordion>
      {bands.length
        ? type === "local"
          ? bands.map((band) => {
              eventKey++;
              return band.upcomingEvents ? (
                band.upcomingEvents.length ? (
                  <Accordion.Item eventKey={eventKey}>
                    <Accordion.Header className="row">
                      <div className="col-2">
                        <a href={`https://${band.upcomingEvents[0].ticketUrl}`}>
                          <Figure>
                            <Figure.Image
                              width={"100%"}
                              alt="171x180"
                              src={band.profilePicture}
                            />
                          </Figure>
                        </a>
                      </div>
                      <div className="col">
                        <h2>{band.name}</h2>
                      </div>
                    </Accordion.Header>
                    <Accordion.Body
                    //className="overflow-auto"
                    //style={{ maxHeight: "20vw" }}
                    >
                      <a href={`https://${band.upcomingEvents[0].ticketUrl}`}>
                        <div className="row">
                          <h4>
                            {band.upcomingEvents[0].venue} -{" "}
                            {band.upcomingEvents[0].date},{" "}
                            {band.upcomingEvents[0].startTime}
                          </h4>

                          <p className="venueAddress">
                            {band.upcomingEvents[0].address}
                          </p>
                        </div>
                        <div className="row">
                          <p className="eventInfo">
                            {band.upcomingEvents[0].info}
                          </p>
                        </div>
                      </a>
                    </Accordion.Body>
                  </Accordion.Item>
                ) : null
              ) : null;
            })
          : shania.map((band) => {
              eventKey++;
              return (
                <Accordion.Item eventKey={eventKey}>
                  <Accordion.Header className="row">
                    <div className="col-2">
                      <a href={band._embedded.venues[0].url}>
                        <Figure>
                          <Figure.Image
                            width={"100%"}
                            alt="171x180"
                            src={band.images[1].url}
                          />
                        </Figure>
                      </a>
                    </div>
                    <div className="col">
                      <h2>{band.name}</h2>
                    </div>
                  </Accordion.Header>
                  <Accordion.Body
                    className="overflow-auto"
                    style={{ maxHeight: "20vw" }}
                  >
                    <a href={`https://${band.upcomingEvents[0].ticketUrl}`}>
                      <div className="row">
                        <h4>
                          {band._embedded.venues[0].name} -{" "}
                          {band.dates.start.localDate},{" "}
                          {band.dates.start.localTime}
                        </h4>

                        <p className="venueAddress">
                          {band._embedded.venues[0].address.line1},{" "}
                          {band._embedded.venues[0].city.name},{" "}
                          {band._embedded.venues[0].state.name}{" "}
                          {band._embedded.venues[0].postalCode},{" "}
                          {band._embedded.venues[0].country.name}
                        </p>
                      </div>
                      <div className="row">
                        <p className="eventInfo">{band.info}</p>
                      </div>
                    </a>
                  </Accordion.Body>
                </Accordion.Item>
              );
            })
        : null}
    </Accordion>
  );
};

export default Event;
