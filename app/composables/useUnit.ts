interface Unit {
    singular: string
    plural: string
    abbreviation: string
}

const units: Record<string, Unit> = {
    day: {
        singular: 'dia',
        plural: 'dias',
        abbreviation: 'd'
    },
    hour: {
        singular: 'hora',
        plural: 'horas',
        abbreviation: 'h'
    },
    minute: {
        singular: 'minuto',
        plural: 'minutos',
        abbreviation: 'min'
    },
    second: {
        singular: 'segundo',
        plural: 'segundos',
        abbreviation: 's'
    }
}

export const useUnit = (key: string, count: number, isAbbreviated: boolean) => {
    const unit = units[key]
    if (!unit) return { singular: '', plural: '', abbreviation: '' }

    return isAbbreviated 
        ? unit.abbreviation 
        : (count === 1 || count === 0 ? unit.singular : unit.plural)
}