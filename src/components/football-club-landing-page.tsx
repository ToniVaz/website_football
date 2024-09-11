'use client'

import React, { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import Image from "next/image"
import Link from "next/link"

const clubData = {
  bocaJuniors: {
    name: "Boca Juniors",
    fullName: "Club Atlético Boca Juniors",
    founded: "April 3, 1905",
    colors: {
      primary: "#0f4b81",
      secondary: "#ffd700",
      text: "#ffffff"
    },
    logo: "/placeholder.svg?height=100&width=100&text=Boca",
    stadium: "La Bombonera",
    currentLeague: "Primera División",
    leaguePosition: 3,
    topScorer: "Darío Benedetto",
    recentResults: [
      { opponent: "River Plate", result: "W 2-1" },
      { opponent: "Racing Club", result: "D 0-0" },
      { opponent: "Independiente", result: "W 3-0" },
      { opponent: "San Lorenzo", result: "L 1-2" },
      { opponent: "Vélez Sarsfield", result: "W 2-0" }
    ],
    trophies: {
      domestic: [
        "Primera División: 34",
        "Copa Argentina: 4",
        "Supercopa Argentina: 1"
      ],
      international: [
        "Copa Libertadores: 6",
        "Intercontinental Cup: 3",
        "Copa Sudamericana: 2"
      ]
    },
    players: [
      { name: "Sergio Romero", position: "Goalkeeper" },
      { name: "Marcos Rojo", position: "Defender" },
      { name: "Frank Fabra", position: "Defender" },
      { name: "Alan Varela", position: "Midfielder" },
      { name: "Guillermo Fernández", position: "Midfielder" },
      { name: "Sebastián Villa", position: "Forward" },
      { name: "Darío Benedetto", position: "Forward" },
      { name: "Exequiel Zeballos", position: "Forward" }
    ]
  },
  lduQuito: {
    name: "LDU Quito",
    fullName: "Liga Deportiva Universitaria de Quito",
    founded: "January 11, 1930",
    colors: {
      primary: "#ffffff",
      secondary: "#cc0000",
      text: "#000000"
    },
    logo: "/placeholder.svg?height=100&width=100&text=LDU",
    stadium: "Estadio Rodrigo Paz Delgado",
    currentLeague: "Serie A",
    leaguePosition: 2,
    topScorer: "Paolo Guerrero",
    recentResults: [
      { opponent: "Barcelona SC", result: "W 2-0" },
      { opponent: "Emelec", result: "D 1-1" },
      { opponent: "Independiente del Valle", result: "W 3-1" },
      { opponent: "Aucas", result: "W 2-0" },
      { opponent: "Universidad Católica", result: "D 0-0" }
    ],
    trophies: {
      domestic: [
        "Serie A: 11",
        "Copa Ecuador: 1"
      ],
      international: [
        "Copa Libertadores: 1",
        "Copa Sudamericana: 1",
        "Recopa Sudamericana: 2"
      ]
    },
    players: [
      { name: "Alexander Domínguez", position: "Goalkeeper" },
      { name: "José Quintero", position: "Defender" },
      { name: "Franklin Guerra", position: "Defender" },
      { name: "Ezequiel Piovi", position: "Midfielder" },
      { name: "Mauricio Martínez", position: "Midfielder" },
      { name: "Alexander Alvarado", position: "Midfielder" },
      { name: "Paolo Guerrero", position: "Forward" },
      { name: "Jhojan Julio", position: "Forward" }
    ]
  }
}

type ClubKey = keyof typeof clubData;

export function FootballClubLandingPage() {
  const [currentClub, setCurrentClub] = useState<ClubKey>('bocaJuniors')
  const club = clubData[currentClub]

  const switchClub = () => {
    setCurrentClub(currentClub === 'bocaJuniors' ? 'lduQuito' : 'bocaJuniors')
  }

  return (
    <div className="flex flex-col min-h-screen" style={{ backgroundColor: club.colors.primary, color: club.colors.text }}>
      <header className="py-4" style={{ backgroundColor: club.colors.secondary }}>
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Image
              src={club.logo}
              alt={`${club.name} Logo`}
              width={50}
              height={50}
              className="rounded-full"
            />
            <span className="text-xl font-bold">{club.name}</span>
          </div>
          <nav className="hidden md:flex space-x-4">
            <Link className="hover:underline" href="#about">About</Link>
            <Link className="hover:underline" href="#statistics">Statistics</Link>
            <Link className="hover:underline" href="#team">Team</Link>
            <Link className="hover:underline" href="#history">History</Link>
          </nav>
          <Button onClick={switchClub} variant="outline">
            Switch to {currentClub === 'bocaJuniors' ? 'LDU Quito' : 'Boca Juniors'}
          </Button>
        </div>
      </header>

      <main className="flex-grow" style={{ backgroundColor: club.colors.primary }}>
        <section className="py-20" style={{ backgroundColor: club.colors.secondary }}>
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">{club.fullName}</h1>
            <p className="text-xl mb-8">Home of the {club.name === "Boca Juniors" ? "Xeneizes" : "White Kings"}</p>
            <Button className="bg-white text-black hover:bg-gray-200">Learn More</Button>
          </div>
        </section>

        <section id="about" className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">About {club.name}</h2>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <p className="mb-4">
                  {club.fullName}, commonly known as {club.name}, is a professional football club based in 
                  {club.name === "Boca Juniors" ? " Buenos Aires, Argentina" : " Quito, Ecuador"}. Founded on {club.founded}, 
                  it is one of the most successful clubs in {club.name === "Boca Juniors" ? "Argentine" : "Ecuadorian"} football history.
                </p>
                <p>
                  {club.name} plays its home games at {club.stadium}, which is renowned for its passionate atmosphere 
                  and is considered one of the most iconic stadiums in South America.
                </p>
              </div>
              <Image
                src="/placeholder.svg?height=300&width=400"
                alt={`${club.stadium}`}
                width={400}
                height={300}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </section>

        <section id="statistics" className="py-16" style={{ backgroundColor: club.colors.secondary }}>
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">Current Statistics</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>League Position</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-4xl font-bold">{club.leaguePosition}th</p>
                  <p className="text-sm">{club.currentLeague}</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Top Scorer</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-4xl font-bold">{club.topScorer}</p>
                  <p className="text-sm">Current Season</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Recent Form</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex space-x-1">
                    {club.recentResults.map((result, index) => (
                      <span 
                        key={index}
                        className={`w-8 h-8 flex items-center justify-center rounded-full ${
                          result.result.startsWith('W') ? 'bg-green-500' :
                          result.result.startsWith('D') ? 'bg-yellow-500' : 'bg-red-500'
                        } text-white font-bold`}
                      >
                        {result.result[0]}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Last 5 Matches</CardTitle>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableBody>
                      {club.recentResults.map((result, index) => (
                        <TableRow key={index}>
                          <TableCell>{result.opponent}</TableCell>
                          <TableCell>{result.result}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section id="team" className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">Our Team</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {club.players.map((player, index) => (
                <Card key={index}>
                  <CardContent className="p-4">
                    <Image
                      src={`/placeholder.svg?height=150&width=150&text=${player.name}`}
                      alt={player.name}
                      width={150}
                      height={150}
                      className="rounded-full mx-auto mb-4"
                    />
                    <h3 className="text-lg font-semibold text-center">{player.name}</h3>
                    <p className="text-center text-gray-600">{player.position}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="history" className="py-16" style={{ backgroundColor: club.colors.secondary }}>
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">Club History</h2>
            <Tabs defaultValue="domestic" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="domestic">Domestic Titles</TabsTrigger>
                <TabsTrigger value="international">International Titles</TabsTrigger>
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
      </main>

      <footer className="py-8" style={{ backgroundColor: club.colors.secondary }}>
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2023 {club.name}. All rights reserved.</p>
          <div className="flex justify-center space-x-4 mt-4">
            <Link href="#" className="hover:text-blue-400">
              <TwitterIcon className="h-6 w-6" />
            </Link>
            <Link href="#" className="hover:text-blue-400">
              <FacebookIcon className="h-6 w-6" />
            </Link>
            <Link href="#" className="hover:text-blue-400">
              <InstagramIcon className="h-6 w-6" />
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
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
  )
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
  )
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
  )
}