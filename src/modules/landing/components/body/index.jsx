"use client";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Trophy, Star, Mail } from "lucide-react";

export function EnhancedFootballStandings() {
  const standings = [
    {
      position: 1,
      team: "Aucas",
      played: 38,
      won: 28,
      drawn: 7,
      lost: 3,
      points: 91,
    },
    {
      position: 2,
      team: "Emelec",
      played: 38,
      won: 26,
      drawn: 6,
      lost: 6,
      points: 84,
    },
    {
      position: 3,
      team: "Barcelona SC",
      played: 38,
      won: 23,
      drawn: 8,
      lost: 7,
      points: 77,
    },
    {
      position: 4,
      team: "Cumbayá",
      played: 38,
      won: 21,
      drawn: 8,
      lost: 9,
      points: 71,
    },
    {
      position: 5,
      team: "Delfín",
      played: 38,
      won: 20,
      drawn: 6,
      lost: 12,
      points: 66,
    },
    {
      position: 6,
      team: "El Nacional",
      played: 38,
      won: 18,
      drawn: 8,
      lost: 12,
      points: 62,
    },
    {
      position: 7,
      team: "Imbabura",
      played: 38,
      won: 15,
      drawn: 9,
      lost: 14,
      points: 54,
    },
    {
      position: 8,
      team: "Liga de Quito",
      played: 38,
      won: 15,
      drawn: 8,
      lost: 15,
      points: 53,
    },
  ];

  const news = [
    "¡Barcelona se corona campeón de La Liga!",
    "Real Madrid asegura su lugar en la Champions League",
    "Atlético Madrid termina la temporada en tercer lugar",
    "Real Sociedad sorprende y se clasifica para la Champions",
  ];

  const topPlayers = [
    { name: "Paolo Guerrero", team: "LDU Quito", goals: 30 },
    { name: "Oscar Quiñónez", team: "Orense", goals: 27 },
    { name: "Jhon Ontaneda", team: "Aucas", goals: 23 },
    { name: "Alex Rangel", team: "Barcelona SC", goals: 21 },
  ];

  return (
    <div className="flex flex-col min-h-screen" style={{ marginTop: "100px" }}>
      <header className="bg-[#B40000] text-white ">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold flex items-center">
            <Trophy className="mr-2" />
            Liga Pro EcuaBet
          </h1>
        </div>
      </header>

      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="md:col-span-2">
            <CardHeader className="bg-gray-800 text-white">
              <CardTitle className="text-2xl">Temporada 2023-2024</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableCaption>Tabla de posiciones actualizada</TableCaption>
                <TableHeader>
                  <TableRow className="bg-gray-200">
                    <TableHead className="w-[100px]">Posición</TableHead>
                    <TableHead>Equipo</TableHead>
                    <TableHead>PJ</TableHead>
                    <TableHead>G</TableHead>
                    <TableHead>E</TableHead>
                    <TableHead>P</TableHead>
                    <TableHead>Puntos</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {standings.map((team) => (
                    <TableRow
                      key={team.position}
                      className={team.position <= 4 ? "bg-gray-100" : ""}
                    >
                      <TableCell className="font-medium">
                        {team.position}
                      </TableCell>
                      <TableCell>{team.team}</TableCell>
                      <TableCell>{team.played}</TableCell>
                      <TableCell>{team.won}</TableCell>
                      <TableCell>{team.drawn}</TableCell>
                      <TableCell>{team.lost}</TableCell>
                      <TableCell className="font-bold">{team.points}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>

          <div className="space-y-8">
            <Card>
              <CardHeader
                className="bg-gray-800 text-white"
                style={{ marginBottom: "20px" }}
              >
                <CardTitle className="text-xl flex items-center">
                  <Star className="mr-2" />
                  Jugadores Destacados
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {topPlayers.map((player, index) => (
                    <li
                      key={index}
                      className="flex justify-between items-center bg-gray-100 p-2 rounded"
                    >
                      <span>{player.name}</span>
                      <span className="font-bold">{player.goals} goles</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="bg-gray-800 text-white">
                <CardTitle className="text-xl flex items-center">
                  <Mail className="mr-2" />
                  Suscríbete a las Noticias
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form className="space-y-4" style={{ marginTop: "20px" }}>
                  <Input type="email" placeholder="Tu correo electrónico" />
                  <Button className="w-full bg-gray-800 hover:bg-gray-700">
                    Suscribirse
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <footer className="bg-[#B40000] text-white py-6">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
}
