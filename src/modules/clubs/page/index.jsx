import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
// import { Badge } from "@/components/ui/badge";
// import { SoccerBallIcon } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { clubData } from "@/modules/clubs/api.jsx";
import { CardsCustom } from "@/components/cards";
import { UpcomingMatch } from "@/components/upcomingMatch";
import { Header } from "../../../components/ui/header";

const Stadium = ({ club }) => {
  return (
    <section
      className="py-20 bg-cover bg-center"
      style={{
        backgroundColor: club.colors.secondary,
        backgroundImage: `url(${club.grandstand})`,
        backgroundSize: "cover", // Asegura que la imagen cubra toda la sección
        backgroundPosition: "center", // Centra la imagen
        backgroundRepeat: "no-repeat", // Evita que la imagen se repita
        color: `${club.colors?.headerTextColor}`,
      }}
    >
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 textransform-">
          {club.fullName}
        </h1>
      </div>
    </section>
  );
};

export default function ClubList() {
  const { clubName } = useParams();
  const [currentClub, setCurrentClub] = useState(null);

  useEffect(() => {
    if (clubName) {
      setCurrentClub(clubName);
    }
  }, [clubName]);

  const club = clubData[currentClub];

  if (!club) return <div>Loading...</div>;
  return (
    <Header>
      <div
        className="flex flex-col min-h-screen"
        style={{
          backgroundColor: club.colors.primary,
          color: club.colors.text,
        }}
      >
        <header
          className="py-4"
          style={{
            backgroundColor: club.colors.tertiary
              ? club.colors.tertiary
              : club.colors.secondary,
            padding: "5px",
          }}
        >
          <div className="container mx-auto px-4 flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <img
                src={club.logo}
                alt={`${club.name} Logo`}
                width={50}
                height={50}
              />
              <span
                style={{
                  color: club.colors.headerTextColor,
                  textTransform: "uppercase",
                }}
                className="text-xl font-bold"
              >
                {club.name}
              </span>
            </div>
          </div>
        </header>
        <Stadium club={club} />
        <div
          style={{
            background: club.colors.primary,
            padding: "5rem",
          }}
        >
          <UpcomingMatch club={club} />
        </div>

        <main
          className="flex-grow"
          style={{ backgroundColor: club.colors.primary }}
        >
          <section
            id="statistics"
            className="py-16"
            style={{ backgroundColor: club.colors.secondary }}
          >
            <div className="container mx-auto px-4">
              <div className="flex justify-evenly items-center gap-4 mb-5">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center">
                  {club?.currentLeague?.name}
                </h2>
                <div className="flex justify-center items-center w-20 h-20">
                  <img
                    src={club?.currentLeague?.logo}
                    alt={club.currentLeague?.name}
                  />
                </div>
                <h2
                  className="text-xl sm:text-2xl md:text-3xl font-bold text-center"
                  style={{ padding: "10px" }}
                >
                  FECHA 14
                </h2>
              </div>
              <CardsCustom club={club} />
            </div>
          </section>

          <section id="team" className="py-16">
            <div className="container mx-auto px-4">
              <h2
                className="text-3xl font-bold mb-8 text-center"
                style={{ color: `${club.colors.secondary}` }}
              >
                TEMPORADA 23/24
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {club.players.map((player, index) => (
                  <Card
                    key={index}
                    style={{
                      background: `${club.colors.secondary}`,
                      color: `${club.colors.primary}`,
                    }}
                  >
                    <CardContent className="p-4">
                      <img
                        src={player.img}
                        alt={player.name}
                        width={150}
                        height={100}
                        className="rounded-full mx-auto mb-4"
                      />
                      <h3 className="text-lg font-semibold text-center">
                        {player.name}
                      </h3>
                      <p className="text-center text-gray-600">
                        {player.position}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>
          <section
            id="history"
            className="py-16"
            style={{ backgroundColor: club.colors.secondary }}
          >
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold mb-8 text-center">
                Breve Historia del Club
              </h2>
              <Tabs defaultValue="domestic" className="w-full">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="domestic">Títulos Locales</TabsTrigger>
                  <TabsTrigger value="international">
                    Títulos Internacionales
                  </TabsTrigger>
                </TabsList>
                <TabsContent value="domestic">
                  <ul className="list-disc pl-6">
                    {club.trophies.domestic.map((trophy, index) => (
                      <li key={index}>{trophy}</li>
                    ))}
                  </ul>
                </TabsContent>
                <TabsContent value="international">
                  <ul className="list-disc pl-6">
                    {club.trophies.international.map((trophy, index) => (
                      <li key={index}>{trophy}</li>
                    ))}
                  </ul>
                </TabsContent>
              </Tabs>
            </div>
          </section>

          <section id="about" className="py-16">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold mb-8 text-center">
                {club.name}
              </h2>
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <p className="mb-4">
                    {club.fullName}, conocido comúnmente como {club.name}, es un
                    club de fútbol profesional con sede en
                    {club.name === "Boca Juniors"
                      ? " Buenos Aires, Argentina"
                      : " Quito, Ecuador"}
                    . Fundado en {club.founded}, es uno de los clubes más
                    exitosos en la historia del fútbol{" "}
                    {club.name === "Boca Juniors" ? "argentino" : "ecuatoriano"}
                    .
                  </p>
                  <p>
                    {club.name} juega sus partidos en casa en{" "}
                    {club?.stadium?.name}, que es conocido por su apasionada
                    atmósfera y se considera uno de los estadios más icónicos de
                    Sudamérica.
                  </p>
                </div>

                <img
                  src={club.stadium.img}
                  alt={`${club.stadium}`}
                  width={400}
                  height={300}
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </section>
        </main>

        <footer
          className="py-8"
          style={{ backgroundColor: club.colors.secondary }}
        >
          <div className="container mx-auto px-4 text-center">
            <p>&copy; 2023 {club.name}. All rights reserved.</p>
            <div className="flex justify-center space-x-4 mt-4">
              {/* <Link href="#" className="hover:text-blue-400">
              <TwitterIcon className="h-6 w-6" />
            </Link>
            <Link href="#" className="hover:text-blue-400">
              <FacebookIcon className="h-6 w-6" />
            </Link>
            <Link href="#" className="hover:text-blue-400">
              <InstagramIcon className="h-6 w-6" />
            </Link> */}
            </div>
          </div>
        </footer>
      </div>
    </Header>
  );
}

function TwitterIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  );
}

function FacebookIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function InstagramIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}
