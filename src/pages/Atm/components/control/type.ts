export interface Control{
    name: string;
    isSelected: boolean;
    onSelect: () => string;
}