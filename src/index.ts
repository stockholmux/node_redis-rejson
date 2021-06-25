import Redis from 'redis';

export const addReJSONModule = (redis: typeof Redis) => {
  [
    'json.arrappend',
    'json.arrindex',
    'json.arrinsert',
    'json.arrlen',
    'json.arrpop',
    'json.arrtrim',
    'json.debug',
    'json.del',
    'json.forget',
    'json.get',
    'json.mget',
    'json.numincrby',
    'json.nummultby',
    'json.objkeys',
    'json.objlen',
    'json.resp',
    'json.set',
    'json.strappend',
    'json.strlen',
    'json.type'
  ].forEach(command => {
    redis.addCommand(command);
  });
};

declare module 'redis' {
  export interface Commands<R> {
    /**
     * Append the `json` value(s) into the array at `path` after the last element in it.
     * 
     * Available since `1.0.0`.
     * 
     * Time complexity: `O(N)`, where `N` is the array's size.
     */
    json_arrappend<T extends (string | number)[]>(key: string, path: string, ...json: [...T, Callback<number>]): R;
    /**
     * Append the `json` value(s) into the array at `path` after the last element in it.
     * 
     * Available since `1.0.0`.
     * 
     * Time complexity: `O(N)`, where `N` is the array's size.
     */
    JSON_ARRAPPEND<T extends (string | number)[]>(key: string, path: string, ...json: [...T, Callback<number>]): R;

    /**
     * Search for the first occurrence of a scalar JSON value in an array.
     * 
     * The optional inclusive `start` (default `0`) and exclusive stop (default 0, meaning that the last element is included) specify a slice of the array to search.
     * Note: out of range errors are treated by rounding the index to the array's start and end.
     * An inverse index range (e.g. from `1` to `0`) will return unfound.
     * 
     * Available since `1.0.0`.
     * 
     * Time complexity: `O(N)`, where `N` is the array's size.
     */
    json_arrindex(key: string, path: string, value: string | number, callback?: Callback<number>): R;
    json_arrindex(key: string, path: string, value: string | number, start?: number, callback?: Callback<number>): R;
    json_arrindex(key: string, path: string, value: string | number, start?: number, stop?: number, callback?: Callback<number>): R;
    /**
     * Search for the first occurrence of a scalar JSON value in an array.
     * 
     * The optional inclusive `start` (default `0`) and exclusive stop (default 0, meaning that the last element is included) specify a slice of the array to search.
     * Note: out of range errors are treated by rounding the index to the array's start and end.
     * An inverse index range (e.g. from `1` to `0`) will return unfound.
     * 
     * Available since `1.0.0`.
     * 
     * Time complexity: `O(N)`, where `N` is the array's size.
     */
    JSON_ARRINDEX(key: string, path: string, value: string | number, callback?: Callback<number>): R;
    JSON_ARRINDEX(key: string, path: string, value: string | number, start?: number, callback?: Callback<number>): R;
    JSON_ARRINDEX(key: string, path: string, value: string | number, start?: number, stop?: number, callback?: Callback<number>): R;

    /**
     * Insert the json value(s) into the array at path before the index (shifts to the right).
     * 
     * The `index` must be in the array's range.
     * Inserting at `index` `0` prepends to the array.
     * Negative index values are interpreted as starting from the end.
     * 
     * Available since `1.0.0`.
     * 
     * Time complexity: `O(N)`, where `N` is the array's size.
     */
    json_arrinsert<T extends string[]>(key: string, path: string, index: number, ...json: [...T, Callback<number>]): R;
    /**
     * Insert the json value(s) into the array at path before the index (shifts to the right).
     * 
     * The `index` must be in the array's range.
     * Inserting at `index` `0` prepends to the array.
     * Negative index values are interpreted as starting from the end.
     * 
     * Available since `1.0.0`.
     * 
     * Time complexity: `O(N)`, where `N` is the array's size.
     */
    JSON_ARRINSERT<T extends string[]>(key: string, path: string, index: number, ...json: [...T, Callback<number>]): R;

    /**
     * Report the length of the JSON Array at `path` in `key`.
     * 
     * Available since `1.0.0`.
     * 
     * Time complexity: `O(1)`.
     */
    json_arrlen(key: string, path: string, callback?: Callback<number>): R;
    /**
     * Report the length of the JSON Array at `path` in `key`.
     * 
     * Available since `1.0.0`.
     * 
     * Time complexity: `O(1)`.
     */
    JSON_ARRLEN(key: string, path: string, callback?: Callback<number>): R;

    /**
     * Remove and return element from the index in the array.
     * 
     * `index` is the position in the array to start popping from.
     * Out of range indices are rounded to their respective array ends.
     * Popping an empty array yields `null`.
     * 
     * Available since `1.0.0`.
     * 
     * Time complexity: `O(N)`, where `N` is the array's size for `index` other than the last element, `O(1)` otherwise.
     */
    json_arrpop(key: string, path: string, index: number, callback?: Callback<number>): R;
    /**
     * Remove and return element from the index in the array.
     * 
     * `index` is the position in the array to start popping from.
     * Out of range indices are rounded to their respective array ends.
     * Popping an empty array yields `null`.
     * 
     * Available since `1.0.0`.
     * 
     * Time complexity: `O(N)`, where `N` is the array's size for `index` other than the last element, `O(1)` otherwise.
     */
    JSON_ARRPOP(key: string, path: string, index: number, callback?: Callback<number>): R;

    /**
     * Trim an array so that it contains only the specified inclusive range of elements.
     * 
     * This command is extremely forgiving and using it with out of range indexes will not produce an error.
     * If start is larger than the array's size or start > stop , the result will be an empty array.
     * If start is < 0 then it will be treated as 0.
     * If stop is larger than the end of the array, it will be treated like the last element in it.
     * 
     * Available since `1.0.0`.
     * 
     * Time complexity: `O(N)`, where `N` is the array's size.
     */
    json_arrtrim(key: string, path: string, start: number, stop: number, callback?: Callback<number>): R;
    /**
     * Trim an array so that it contains only the specified inclusive range of elements.
     * 
     * This command is extremely forgiving and using it with out of range indexes will not produce an error.
     * If start is larger than the array's size or start > stop , the result will be an empty array.
     * If start is < 0 then it will be treated as 0.
     * If stop is larger than the end of the array, it will be treated like the last element in it.
     * 
     * Available since `1.0.0`.
     * 
     * Time complexity: `O(N)`, where `N` is the array's size.
     */
    JSON_ARRTRIM(key: string, path: string, start: number, stop: number, callback?: Callback<number>): R;

    /**
     * Report the memory usage in bytes of a value.
     * 
     * Available since `1.0.0`.
     * 
     * Time complexity: `O(N)`, where `N` is the size of the JSON value.
     */
    json_debug(command: 'memory', key: string, path: string, callback?: Callback<void>): R;
    /**
     * Report a helpful message.
     * 
     * Available since `1.0.0`.
     * 
     * Time complexity: `O(N)`, where `N` is the size of the JSON value.
     */
    json_debug(command: 'help', key: string, path: string, callback?: Callback<void>): R;
    /**
     * Report the memory usage in bytes of a value.
     * 
     * Available since `1.0.0`.
     * 
     * Time complexity: `O(N)`, where `N` is the size of the JSON value.
     */
    JSON_DEBUG(command: 'memory', key: string, path: string, callback?: Callback<void>): R;
    /**
     * Report a helpful message.
     * 
     * Available since `1.0.0`.
     * 
     * Time complexity: `O(N)`, where `N` is the size of the JSON value.
     */
    JSON_DEBUG(command: 'help', key: string, path: string, callback?: Callback<void>): R;

    /**
     * Delete a value.
     * 
     * Available since `1.0.0`.
     * 
     * Time complexity: `O(N)`, where `N` is the size of the deleted value.
     */
    json_del(key: string, path: string, callback?: Callback<void>): R;
    /**
     * Delete a value.
     * 
     * Available since `1.0.0`.
     * 
     * Time complexity: `O(N)`, where `N` is the size of the deleted value.
     */
    JSON_DEL(key: string, path: string, callback?: Callback<void>): R;

    /**
     * Alias for `json_del`.
     */
    json_forget(key: string, path: string, callback?: Callback<void>): R;
    /**
     * Alias for `json_del`.
     */
    JSON_FORGET(key: string, path: string, callback?: Callback<void>): R;

    /**
     * Return the value at path in JSON serialized form.
     * 
     * Available since `1.0.0`.
     * 
     * Time complexity: `O(N)`, where `N` is the size of the value.
     */
    json_get(key: string, callback?: Callback<string>): R;
    json_get(key: string, path: string, callback?: Callback<string>): R;
    /**
     * Return the value at path in JSON serialized form.
     * 
     * Available since `1.0.0`.
     * 
     * Time complexity: `O(N)`, where `N` is the size of the value.
     */
    JSON_GET(key: string, callback?: Callback<string>): R;
    JSON_GET(key: string, path: string, callback?: Callback<string>): R;

    /**
     * Returns the values at `path` from multiple `key`s. Non-existing keys and non-existing paths are reported as `null`.
     * 
     * Available since `1.0.0`.
     * 
     * Time complexity: `O(M*N)`, where `M` is the number of keys and `N` is the size of the value.
     */
    json_mget<T extends string[]>(...keys: [...T, string, Callback<string>]): T;
    /**
     * Returns the values at `path` from multiple `key`s. Non-existing keys and non-existing paths are reported as `null`.
     * 
     * Available since `1.0.0`.
     * 
     * Time complexity: `O(M*N)`, where `M` is the number of keys and `N` is the size of the value.
     */
    JSON_MGET<T extends string[]>(...keys: [...T, string, Callback<string>]): T;

    /**
     * Increments the number value stored at `path` by `number`.
     * 
     * Available since `1.0.0`.
     * 
     * Time complexity: `O(1)`.
     */
    json_numincrby(key: string, path: string, number: number, callback?: Callback<number>): R;
    /**
     * Increments the number value stored at `path` by `number`.
     * 
     * Available since `1.0.0`.
     * 
     * Time complexity: `O(1)`.
     */
    JSON_NUMINCRBY(key: string, path: string, number: number, callback?: Callback<number>): R;

    /**
     * Multiplies the number value stored at `path` by `number`.
     * 
     * Available since `1.0.0`.
     * 
     * Time complexity: `O(1)`.
     */
    json_nummultby(key: string, path: string, number: number, callback?: Callback<number>): R;
    /**
     * Multiplies the number value stored at `path` by `number`.
     * 
     * Available since `1.0.0`.
     * 
     * Time complexity: `O(1)`.
     */
    JSON_NUMMULTBY(key: string, path: string, number: number, callback?: Callback<number>): R;

    /**
     * Return the keys in the object that's referenced by `path`.
     * 
     * Available since `1.0.0`.
     * 
     * Time complexity: `O(1)`.
     */
    json_objkeys(key: string, path: string, callback?: Callback<number>): R;
    /**
     * Return the keys in the object that's referenced by `path`.
     * 
     * Available since `1.0.0`.
     * 
     * Time complexity: `O(N)`, where `N` is the number of keys in the object.
     */
    JSON_OBJKEYS(key: string, path: string, callback?: Callback<number>): R;

    /**
     * Report the number of keys in the JSON Object at `path` in `key`.
     * 
     * Available since `1.0.0`.
     * 
     * Time complexity: `O(1)`.
     */
    json_objlen(key: string, path: string, callback?: Callback<number>): R;
    /**
     * Report the number of keys in the JSON Object at `path` in `key`.
     * 
     * Available since `1.0.0`.
     * 
     * Time complexity: `O(1)`.
     */
    JSON_OBJLEN(key: string, path: string, callback?: Callback<number>): R;

    /**
     * Return the JSON in `key` in Redis Serialization Protocol (RESP).
     * 
     * Available since `1.0.0`.
     * 
     * Time complexity: `O(N)`, where `N` is the size of the JSON value.
     */
    json_resp(key: string, path: string, callback?: Callback<number>): R;
    /**
     * Return the JSON in `key` in Redis Serialization Protocol (RESP).
     * 
     * Available since `1.0.0`.
     * 
     * Time complexity: `O(N)`, where `N` is the size of the JSON value.
     */
    JSON_RESP(key: string, path: string, callback?: Callback<number>): R;

    /**
     * Sets the JSON value at `path` in `key`.
     * 
     * Available since `1.0.0`.
     * 
     * Time complexity: `O(M+N)`, where `M` is the size of the original value (if it exists) and `N` is the size of the new value.
    */
    json_set(key: string, path: string, value: any, callback?: Callback<'OK'>): R;
    /**
    * Sets the JSON value at `path` in `key`.
    * 
    * Available since `1.0.0`.
    * 
    * Time complexity: `O(M+N)`, where `M` is the size of the original value (if it exists) and `N` is the size of the new value.
    */
    JSON_SET(key: string, path: string, value: any, callback?: Callback<'OK'>): R;

    /**
     * Append the json-string value(s) the string at `path`.
     * 
     * Available since `1.0.0`.
     * 
     * Time complexity: `O(M+N)`, where `M` is the size of the original value (if it exists) and `N` is the size of the new value.
     */
    json_strappend(key: string, path: string, value: string, callback?: Callback<'OK'>): R;
    /**
     * Append the json-string value(s) the string at `path`.
     * 
     * Available since `1.0.0`.
     * 
     * Time complexity: `O(M+N)`, where `M` is the size of the original value (if it exists) and `N` is the size of the new value.
     */
    JSON_STRAPPEND(key: string, path: string, value: string, callback?: Callback<'OK'>): R;

    /**
     * Report the length of the JSON String at `path` in `key`.
     * 
     * Available since `1.0.0`.
     * 
     * Time complexity: `O(1)`.
     */
    json_strlen(key: string, path: string, callback?: Callback<number>): R;
    /**
     * Report the length of the JSON String at `path` in `key`.
     * 
     * Available since `1.0.0`.
     * 
     * Time complexity: `O(1)`.
     */
    JSON_STRLEN(key: string, path: string, callback?: Callback<number>): R;

    /**
     * Report the type of JSON value at `path`.
     * 
     * Available since `1.0.0`.
     * 
     * Time complexity: `O(1)`.
     */
    json_type(key: string, path: string, callback?: Callback<string>): R;
    /**
     * Report the type of JSON value at `path`.
     * 
     * Available since `1.0.0`.
     * 
     * Time complexity: `O(1)`.
     */
    JSON_TYPE(key: string, path: string, callback?: Callback<string>): R;

    /**
     * Increments the number value stored at `path` by `number`.
     * 
     * Available since `1.0.0`.
     * 
     * Time complexity: `O(1)`.
     */
    json_type(key: string, path: string, number: number, callback?: Callback<number>): R;
    /**
     * Increments the number value stored at `path` by `number`.
     * 
     * Available since `1.0.0`.
     * 
     * Time complexity: `O(1)`.
     */
    JSON_TYPE(key: string, path: string, number: number, callback?: Callback<number>): R;
  }
}

export default addReJSONModule;