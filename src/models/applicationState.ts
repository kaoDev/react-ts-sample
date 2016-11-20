export class ApplicationState {
    readonly text: string

    constructor(text: string) {
        this.text = text
    }
}

export const initialAppState = new ApplicationState(
    '# initial headline 2'
)