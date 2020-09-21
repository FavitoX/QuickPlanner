export interface IPlanningEntry {
    id: number;
    item: string;
    version: string;
    status: string;
    product: string;
    duration: number;
    dependency: number;
    plannedStart: Date;
    plannedEnd: Date;
    calculatedEnd: Date;
    realStart: Date;
    realEnd: Date;
    delay: number;
    totalDeviation: number;
    deviation1: number;
    deviation2: number;
    deviation3: number;
    deviation4: number;
    deviation5: number;
    deviation6: number;
    deviation7: number;
    deviation8: number;
    deviation9: number; 
}