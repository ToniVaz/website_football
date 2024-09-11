import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Card, CardContent, CardFooter, CardHeader, CardTitle, } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Trophy } from "lucide-react";
// Componentes
const CardLeaguePosition = ({ club }) => {
    return (_jsxs(Card, { className: "p-6 flex flex-col h-full", style: {
            backgroundColor: club.colors.colorPositionLeague,
            color: club.colors.colorTextPositionLeague,
            border: "none",
        }, children: [_jsx(CardHeader, { className: "p-0", children: _jsx(CardTitle, { children: "POSICI\u00D3N ACTUAL" }) }), _jsx(CardContent, { className: "flex-grow flex justify-center items-center", children: _jsx("div", { style: {
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                    }, children: _jsx("p", { className: "text-7xl sm:text-7xl md:text-9xl lg:text-9xl font-bold", children: club.currentLeague.position }) }) })] }));
};
const CardTopScorer = ({ club }) => {
    const { name, img, goals, colors, season } = club.topScorer;
    console.log(club);
    return (_jsxs(Card, { style: {
            position: "relative",
            overflow: "hidden",
            display: "flex",
            flexDirection: "column",
            backgroundColor: colors.primary,
            maxWidth: "100%",
            border: "none",
        }, children: [_jsxs("div", { className: "relative h-64 overflow-hidden", children: [_jsx("img", { src: img, alt: `${name} - Top Scorer`, className: "w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" }), _jsx("div", { className: "absolute inset-0", style: {
                            background: `linear-gradient(to top, ${colors.primary}, ${colors.primary}b3, transparent)`,
                        } })] }), _jsxs("div", { className: "p-6 absolute inset-0 flex flex-col justify-between", children: [_jsx(CardHeader, { className: "p-0 text-xl sm:text-3xl font-bold font-sans", style: {
                            color: colors.textScorer,
                        }, children: _jsx(CardTitle, { children: "TOP SCORER" }) }), _jsxs("div", { children: [_jsx("h3", { className: "text-2xl sm:text-3xl font-bold mb-2", style: { color: colors.secondary }, children: name }), _jsxs(Badge, { variant: "secondary", className: "text-sm sm:text-lg px-3 py-1 font-sans", style: {
                                    backgroundColor: colors.secondary,
                                    color: colors.tertiary,
                                }, children: [_jsx(Trophy, { className: "w-4 h-4 sm:w-5 sm:h-5 mr-2" }), goals, " Goals"] })] }), _jsx(CardFooter, { className: "absolute bottom-0 right-0 p-4", children: _jsxs("p", { className: "text-xs sm:text-sm font-bold", style: { color: `${colors.secondary}cc` }, children: [season, " SEASON"] }) })] })] }));
};
const CardRecent = ({ club }) => {
    return (_jsxs(Card, { style: {
            backgroundColor: club.colors.analyticsBG,
            color: club.colors.analyticsC,
            border: "none",
        }, children: [_jsx(CardHeader, { children: _jsx(CardTitle, { children: "ANALYTICS" }) }), _jsx(CardContent, { children: _jsx("div", { className: "flex space-x-1", children: club.recentResults.map((result, index) => (_jsx("span", { className: `w-8 h-8 flex items-center justify-center rounded-full ${result.result.startsWith("W")
                            ? "bg-green-500"
                            : result.result.startsWith("D")
                                ? "bg-yellow-500"
                                : "bg-red-500"} text-white font-bold`, children: result.result[0] }, index))) }) })] }));
};
const CardLastMatchs = ({ club }) => {
    return (_jsxs(Card, { style: {
            backgroundColor: club.colors.lastMatchesBG,
            color: club.colors.lastMatchesC,
            border: "none",
        }, children: [_jsx(CardHeader, { children: _jsx(CardTitle, { children: "ULT 5 PARTIDOS" }) }), _jsx(CardContent, { children: _jsx(Table, { children: _jsx(TableBody, { children: club.recentResults.map((result, index) => (_jsxs(TableRow, { children: [_jsx(TableCell, { children: result.opponent }), _jsx(TableCell, { children: result.result })] }, index))) }) }) })] }));
};
export const CardsCustom = ({ club }) => {
    return (_jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 2xl:grid-cols-4 gap-6", children: [_jsx(CardLeaguePosition, { club: club }), _jsx(CardTopScorer, { club: club }), _jsx(CardRecent, { club: club }), _jsx(CardLastMatchs, { club: club })] }));
};
