export default [
    { label: 'Liverpool' },
    { label: 'Real Madrid' },
    { label: 'Chelsea' },
    { label: 'Juventus' },
    { label: 'FC Bayern' },
    { label: 'Arsenal FC' },
].map(suggestion => ({
    value: suggestion.label,
    label: suggestion.label,
}));