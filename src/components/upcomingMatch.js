import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from "react";
import { format, differenceInSeconds } from "date-fns";
import { es } from "date-fns/locale";
import { Calendar, Clock, MapPin } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
export function UpcomingMatch({ club }) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
    const matchDate = new Date((_a = club === null || club === void 0 ? void 0 : club.match) === null || _a === void 0 ? void 0 : _a.date);
    const [timeLeft, setTimeLeft] = React.useState(differenceInSeconds(matchDate, new Date()));
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
    return (_jsxs(Card, { className: "w-full max-w-4xl mx-auto overflow-hidden bg-transparent border-none", children: [_jsxs(CardHeader, { className: "bg-transparent", children: [_jsx(Badge, { variant: "default", className: "mb-2 text-sm sm:text-base bg-white/20", style: {
                            color: (_b = club === null || club === void 0 ? void 0 : club.colors) === null || _b === void 0 ? void 0 : _b.nextMatchColor,
                            display: "flex",
                            justifyContent: "center",
                        }, children: (_c = club === null || club === void 0 ? void 0 : club.match) === null || _c === void 0 ? void 0 : _c.competition }), _jsx(CardTitle, { className: "text-2xl sm:text-3xl md:text-4xl font-bold", style: {
                            color: (_d = club === null || club === void 0 ? void 0 : club.colors) === null || _d === void 0 ? void 0 : _d.nextMatchColor,
                            display: "flex",
                            justifyContent: "center",
                        }, children: "Pr\u00F3ximo Partido" })] }), _jsxs(CardContent, { className: "p-4 sm:p-6 bg-transparent", children: [_jsxs("div", { className: "flex flex-col sm:flex-row items-center justify-between mb-6 space-y-2 sm:space-y-0", children: [_jsxs("div", { className: "flex items-center space-x-2 text-gray-600 dark:text-gray-300", style: { color: (_e = club === null || club === void 0 ? void 0 : club.colors) === null || _e === void 0 ? void 0 : _e.nextMatchColorInfo }, children: [_jsx(Calendar, { className: "h-5 w-5" }), _jsx("span", { className: "text-sm sm:text-base", children: format(matchDate, "EEEE, d 'de' MMMM 'de' yyyy", { locale: es }) })] }), _jsxs("div", { className: "flex items-center space-x-2 text-gray-600 dark:text-gray-300", style: { color: (_f = club === null || club === void 0 ? void 0 : club.colors) === null || _f === void 0 ? void 0 : _f.nextMatchColorInfo }, children: [_jsx(Clock, { className: "h-5 w-5" }), _jsx("span", { className: "text-sm sm:text-base", children: format(matchDate, "HH:mm") })] })] }), _jsxs("div", { className: "flex flex-row items-center justify-around space-y-0 mb-8", children: [_jsx(TeamLogo, { team: club === null || club === void 0 ? void 0 : club.match.homeTeam, logo: (_g = club === null || club === void 0 ? void 0 : club.match) === null || _g === void 0 ? void 0 : _g.homeTeamLogo, color: (_h = club === null || club === void 0 ? void 0 : club.colors) === null || _h === void 0 ? void 0 : _h.nextMatchColorInfo }), _jsx("div", { className: "flex flex-col items-center", children: _jsx("div", { className: "text-3xl sm:text-4xl md:text-5xl font-bold", style: { color: (_j = club === null || club === void 0 ? void 0 : club.colors) === null || _j === void 0 ? void 0 : _j.vsColor }, children: "VS" }) }), _jsx(TeamLogo, { team: club === null || club === void 0 ? void 0 : club.match.awayTeam, logo: (_k = club === null || club === void 0 ? void 0 : club.match) === null || _k === void 0 ? void 0 : _k.awayTeamLogo, color: (_l = club === null || club === void 0 ? void 0 : club.colors) === null || _l === void 0 ? void 0 : _l.nextMatchColorInfo })] }), _jsx("div", { className: "text-center", children: _jsxs("div", { className: "inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200", children: [_jsx(MapPin, { className: "h-5 w-5" }), _jsx("span", { className: "text-sm sm:text-base", children: club === null || club === void 0 ? void 0 : club.match.stadium })] }) })] })] }));
}
function TeamLogo({ team, logo, color }) {
    return (_jsxs("div", { className: "text-center group", children: [_jsx("div", { className: "p-2 sm:p-4 mb-4 transition-transform transform group-hover:scale-110", children: _jsx("div", { className: "relative w-16 h-16 sm:w-24 sm:h-24 md:w-28 md:h-28 overflow-hidden rounded-full flex items-center justify-center", style: { padding: "10px", background: "transparent" }, children: _jsx("img", { src: logo, alt: `${team} logo`, className: "w-full h-full object-contain" }) }) }), _jsx("h2", { className: "text-base sm:text-lg md:text-xl font-semibold", style: { color: color }, children: team })] }));
}
