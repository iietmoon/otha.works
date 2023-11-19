interface ParsedString {
    filter: string;
    value: string;
}
export default function parseString(inputString: string | any): ParsedString {
    const regex: RegExp = /\[(.*?)\]\[(.*?)\]/;
    const match: RegExpMatchArray | null = inputString.match(regex); 
    if (match) {
      return { filter: match[1], value: match[2] };
    } else {
      return { filter: 'defaultFilter', value: 'defaultValue' };
    }
  }