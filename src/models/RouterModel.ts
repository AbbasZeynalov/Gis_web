export interface RouterModel {
    history: RouterHistory
    location: RouterLocation
    match: RouterMatch
    staticContext?: any
}

export interface RouterMatch {
    params: any;
    isExact?: string;
    path: string;
    url: string;
}

export interface RouterHistory {
    push: (path: string) => void
}

export interface RouterLocation {
}
