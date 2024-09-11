import React from "react";
import { format, differenceInSeconds } from "date-fns";
import { es } from "date-fns/locale";
import { Calendar, Clock, MapPin } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

// Definición de tipos
interface ClubColors {
  nextMatchColor: string;
  nextMatchColorInfo: string;
  vsColor: string;
}

interface Match {
  date: string;
  competition: string;
  homeTeam: string;
  homeTeamLogo: string;
  awayTeam: string;
  awayTeamLogo: string;
  stadium: string;
}

interface Club {
  colors: ClubColors;
  match: Match;
}

// Propiedades del componente UpcomingMatch
interface UpcomingMatchProps {
  club: Club;
}

export function UpcomingMatch({ club }: UpcomingMatchProps) {
  const matchDate = new Date(club?.match?.date);
  const [timeLeft, setTimeLeft] = React.useState(
    differenceInSeconds(matchDate, new Date())
  );

  React.useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(differenceInSeconds(matchDate, new Date()));
    }, 1000);

    return () => clearInterval(timer);
  }, [matchDate]);

  const days = Math.floor(timeLeft / (24 * 60 * 60));
  const hours = Math.floor((timeLeft % (24 * 60 * 60)) / (60 * 60));
  const minutes = Math.floor((timeLeft % (60 * 60)) / 60);
  const seconds = timeLeft % 60;

  return (
    <Card className="w-full max-w-4xl mx-auto overflow-hidden bg-transparent border-none">
      <CardHeader className="bg-transparent">
        <Badge
          variant="default"
          className="mb-2 text-sm sm:text-base bg-white/20"
          style={{
            color: club?.colors?.nextMatchColor,
            display: "flex",
            justifyContent: "center",
          }}
        >
          {club?.match?.competition}
        </Badge>
        <CardTitle
          className="text-2xl sm:text-3xl md:text-4xl font-bold"
          style={{
            color: club?.colors?.nextMatchColor,
            display: "flex",
            justifyContent: "center",
          }}
        >
          Próximo Partido
        </CardTitle>
      </CardHeader>
      <CardContent className="p-4 sm:p-6 bg-transparent">
        <div className="flex flex-col sm:flex-row items-center justify-between mb-6 space-y-2 sm:space-y-0">
          <div
            className="flex items-center space-x-2 text-gray-600 dark:text-gray-300"
            style={{ color: club?.colors?.nextMatchColorInfo }}
          >
            <Calendar className="h-5 w-5" />
            <span className="text-sm sm:text-base">
              {format(matchDate, "EEEE, d 'de' MMMM 'de' yyyy", { locale: es })}
            </span>
          </div>
          <div
            className="flex items-center space-x-2 text-gray-600 dark:text-gray-300"
            style={{ color: club?.colors?.nextMatchColorInfo }}
          >
            <Clock className="h-5 w-5" />
            <span className="text-sm sm:text-base">
              {format(matchDate, "HH:mm")}
            </span>
          </div>
        </div>

        <div className="flex flex-row items-center justify-around space-y-0 mb-8">
          <TeamLogo
            team={club?.match.homeTeam}
            logo={club?.match?.homeTeamLogo}
            color={club?.colors?.nextMatchColorInfo}
          />
          <div className="flex flex-col items-center">
            <div
              className="text-3xl sm:text-4xl md:text-5xl font-bold"
              style={{ color: club?.colors?.vsColor }}
            >
              VS
            </div>
          </div>
          <TeamLogo
            team={club?.match.awayTeam}
            logo={club?.match?.awayTeamLogo}
            color={club?.colors?.nextMatchColorInfo}
          />
        </div>

        <div className="text-center">
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200">
            <MapPin className="h-5 w-5" />
            <span className="text-sm sm:text-base">{club?.match.stadium}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

// Propiedades del componente TeamLogo
interface TeamLogoProps {
  team: string;
  logo: string;
  color: string;
}

function TeamLogo({ team, logo, color }: TeamLogoProps) {
  return (
    <div className="text-center group">
      <div className="p-2 sm:p-4 mb-4 transition-transform transform group-hover:scale-110">
        <div
          className="relative w-16 h-16 sm:w-24 sm:h-24 md:w-28 md:h-28 overflow-hidden rounded-full flex items-center justify-center"
          style={{ padding: "10px", background: "transparent" }}
        >
          <img
            src={logo}
            alt={`${team} logo`}
            className="w-full h-full object-contain"
          />
        </div>
      </div>
      <h2
        className="text-base sm:text-lg md:text-xl font-semibold"
        style={{ color: color }}
      >
        {team}
      </h2>
    </div>
  );
}
