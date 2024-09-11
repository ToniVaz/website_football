import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Trophy } from "lucide-react";

// Definición de interfaces

interface ClubColors {
  colorPositionLeague: string;
  colorTextPositionLeague: string;
  primary: string;
  textScorer: string;
  secondary: string;
  tertiary: string;
  analyticsBG: string;
  analyticsC: string;
  lastMatchesBG: string;
  lastMatchesC: string;
}

interface RecentResult {
  result: string;
  opponent: string;
}

interface Club {
  colors: ClubColors;
  currentLeague: {
    position: number;
  };
  recentResults: RecentResult[];
}

// Componentes

const CardLeaguePosition: React.FC<{ club: Club }> = ({ club }) => {
  return (
    <Card
      className="p-6 flex flex-col h-full"
      style={{
        backgroundColor: club.colors.colorPositionLeague,
        color: club.colors.colorTextPositionLeague,
        border: "none",
      }}
    >
      <CardHeader className="p-0">
        <CardTitle>POSICIÓN ACTUAL</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow flex justify-center items-center">
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <p className="text-7xl sm:text-7xl md:text-9xl lg:text-9xl font-bold">
            {club.currentLeague.position}
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

const CardTopScorer: React.FC<{ club: Club }> = ({ club }) => {
  const { name, img, goals, colors, season } = club.topScorer;

  return (
    <Card
      style={{
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        backgroundColor: colors.primary,
        maxWidth: "100%",
        border: "none",
      }}
    >
      <div className="relative h-64 overflow-hidden">
        <img
          src={img}
          alt={`${name} - Top Scorer`}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(to top, ${colors.primary}, ${colors.primary}b3, transparent)`,
          }}
        />
      </div>
      <div className="p-6 absolute inset-0 flex flex-col justify-between">
        <CardHeader
          className="p-0 text-xl sm:text-3xl font-bold font-sans"
          style={{
            color: colors.textScorer,
          }}
        >
          <CardTitle>TOP SCORER</CardTitle>
        </CardHeader>
        <div>
          <h3
            className="text-2xl sm:text-3xl font-bold mb-2"
            style={{ color: colors.secondary }}
          >
            {name}
          </h3>
          <Badge
            variant="secondary"
            className="text-sm sm:text-lg px-3 py-1 font-sans"
            style={{
              backgroundColor: colors.secondary,
              color: colors.tertiary,
            }}
          >
            <Trophy className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
            {goals} Goals
          </Badge>
        </div>
        <CardFooter className="absolute bottom-0 right-0 p-4">
          <p
            className="text-xs sm:text-sm font-bold"
            style={{ color: `${colors.secondary}cc` }}
          >
            {season} SEASON
          </p>
        </CardFooter>
      </div>
    </Card>
  );
};

const CardRecent: React.FC<{ club: Club }> = ({ club }) => {
  return (
    <Card
      style={{
        backgroundColor: club.colors.analyticsBG,
        color: club.colors.analyticsC,
        border: "none",
      }}
    >
      <CardHeader>
        <CardTitle>ANALYTICS</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex space-x-1">
          {club.recentResults.map((result, index) => (
            <span
              key={index}
              className={`w-8 h-8 flex items-center justify-center rounded-full ${
                result.result.startsWith("W")
                  ? "bg-green-500"
                  : result.result.startsWith("D")
                  ? "bg-yellow-500"
                  : "bg-red-500"
              } text-white font-bold`}
            >
              {result.result[0]}
            </span>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

const CardLastMatchs: React.FC<{ club: Club }> = ({ club }) => {
  return (
    <Card
      style={{
        backgroundColor: club.colors.lastMatchesBG,
        color: club.colors.lastMatchesC,
        border: "none",
      }}
    >
      <CardHeader>
        <CardTitle>ULT 5 PARTIDOS</CardTitle>
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
  );
};

export const CardsCustom: React.FC<{ club: Club }> = ({ club }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 2xl:grid-cols-4 gap-6">
      <CardLeaguePosition club={club} />
      <CardTopScorer club={club} />
      <CardRecent club={club} />
      <CardLastMatchs club={club} />
    </div>
  );
};
