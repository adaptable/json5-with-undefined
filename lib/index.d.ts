type JSONReplacer = (key: string, value: any) => any;
type JSONReviver = (key: string, value: any) => any;

interface StringifyOptions {
    /** 
     * A String representing the quote character to use when serializing
     * strings.
     */
    quote?: string;

    /** 
     * A function that alters the behavior of the stringification process, or an
     * array of String and Number objects that serve as a whitelist for
     * selecting/filtering the properties of the value object to be included in
     * the JSON5 string. If this value is null or not provided, all properties
     * of the object are included in the resulting JSON5 string.
     */
    replacer?: JSONReplacer;

    /**
     * A String or Number object that's used to insert white space into the
     * output JSON5 string for readability purposes. If this is a Number, it
     * indicates the number of space characters to use as white space; this
     * number is capped at 10 (if it is greater, the value is just 10). Values
     * less than 1 indicate that no space should be used. If this is a String,
     * the string (or the first 10 characters of the string, if it's longer
     * than that) is used as white space. If this parameter is not provided (or
     * is null), no white space is used. If white space is used, trailing
     * commas will be used in objects and arrays.
     */
    space?: number | string;

    /**
     * If useUndefined is unset or falsey, the generated JSON5 string will
     * contain no uses of the undefined keyword and will be identical to using
     * JSON5.stringify from the upstream project. If useUndefined is truthy,
     * properties and other values that are undefined will be stringified as
     * the keyword undefined in the resulting JSON5 string.
     */
    useUndefined?: boolean;
}

interface JSON5 {
    /**
     * Parses a JSON or JSON5 string, constructing the JavaScript value or object
     * described by the string.
     *
     * @remarks
     * An optional reviver function can be provided to perform a transformation
     * on the resulting object before it is returned.
     *
     * @param text A valid JSON or JSON5 string.
     * @param reviver A function that transforms the results. This function is
     * called for each member of the object. If a member contains nested
     * objects, the nested objects are transformed before the parent object is.
     */

    parse(text: string, reviver?: JSONReviver): any;


    /**
     * Converts a JavaScript value to a JSON5 string, optionally replacing
     * values if a replacer function is specified.
     *
     * @param value A JavaScript value, usually an object or array, to be
     * converted.
     * @param replacer A function that alters the behavior of the
     * stringification process If this value not provided, all properties of
     * the object are included in the resulting JSON5 string.
     * @param space A String or Number object that's used to insert white space
     * into the output JSON5 string for readability purposes. If this is a
     * Number, it indicates the number of space characters to use as white
     * space; this number is capped at 10 (if it is greater, the value is just
     * 10). Values less than 1 indicate that no space should be used. If this
     * is a String, the string (or the first 10 characters of the string, if
     * it's longer than that) is used as white space. If this parameter is not
     * provided (or is null), no white space is used. If white space is used,
     * trailing commas will be used in objects and arrays.
     */
    stringify(value: any, replacer?: JSONReplacer, space?: string | number): string;

    /**
     * Converts a JavaScript value to a JSON5 string, optionally including only
     * the specified properties if a replacer array is specified.
     *
     * @param value A JavaScript value, usually an object or array, to be
     * converted.
     * @param replacer An array of strings and numbers that acts as a approved
     * list for selecting the object properties that will be stringified.
     * @param space A String or Number object that's used to insert white space
     * into the output JSON5 string for readability purposes. If this is a
     * Number, it indicates the number of space characters to use as white
     * space; this number is capped at 10 (if it is greater, the value is just
     * 10). Values less than 1 indicate that no space should be used. If this
     * is a String, the string (or the first 10 characters of the string, if
     * it's longer than that) is used as white space. If this parameter is not
     * provided (or is null), no white space is used. If white space is used,
     * trailing commas will be used in objects and arrays.
     */
    stringify(value: any, replacer?: (number | string)[] | null, space?: string | number): string;

    /**
     * Converts a JavaScript value to a JSON5 string, optionally replacing
     * values if a replacer function is specified.
     *
     * @param value A JavaScript value, usually an object or array, to be
     * converted.
     * @param options Options that affect the transformation of the value
     * and format of the resulting JSON5 string.
     */
    stringify(value: any, options?: StringifyOptions): string;
}

declare const json5: JSON5;
export = json5;
