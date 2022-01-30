declare module 'markdown-tables-to-json' {
    function Extractor(mode: 'rows', lowercaseKeys?: boolean): Extractor
    function Extractor(mode: 'columns', lowercaseKeys?: boolean): Extractor
    function Extractor(mode?: 'rows' | 'columns', lowercaseKeys?: boolean): Extractor
    namespace Extractor {
        function extractObject(md: string, mode: 'rows' | 'columns', lowercaseKeys?: boolean): {}
    }
}
