import type Country from "~/types/Country"

export const useCountries = (): Country[] => {
    return [
        { name: 'English', code: 'en', emoji: '🇺🇸' },
        { name: 'Português (Brasil)', code: 'pt_br', emoji: '🇧🇷' },
        { name: 'Português', code: 'pt', emoji: '🇵🇹' }
    ]
}
