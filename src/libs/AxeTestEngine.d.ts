declare module namespace {
    
    export interface Violation {
        id: string;
        impact: string;
        tags: string[];
        description: string;
        help: string;
        helpUrl: string;
        nodes: Node[];
    }

    export interface All {
        id: string;
        data: Data;
        relatedNodes: RelatedNode[];
        impact: string;
        message: string;
    }

    export interface Data {
        fgColor: string;
        bgColor: string;
        contrastRatio: number;
        fontSize: string;
        fontWeight: string;
        expectedContrastRatio: string;
    }

    export interface RelatedNode {
        html: string;
        target: string[];
    }

    export interface Any {
        id: string;
        data: Data;
        relatedNodes: RelatedNode[];
        impact: string;
        message: string;
    }

    export interface Node {
        any: Any[];
        all: any[];
        none: any[];
        impact: string;
        html: string;
        target: string[];
        failureSummary: string;
    }
}

