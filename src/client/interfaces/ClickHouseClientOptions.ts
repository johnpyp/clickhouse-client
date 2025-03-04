import {
    ClickHouseCompressionMethod,
    ClickHouseConnectionProtocol,
    ClickHouseDataFormat
} from '../enums';

import * as http from 'http';
import * as https from 'https';

export class ClickHouseSettings {
    /**
     * Enables or disables X-ClickHouse-Progress HTTP response headers in clickhouse-server responses.
     *
     * Default: 0
     */
    public send_progress_in_http_headers?: 0 | 1 = 0;

    /**
     * You can enable response buffering on the server-side. The buffer_size and wait_end_of_query URL parameters are provided for this purpose.
     * buffer_size determines the number of bytes in the result to buffer in the server memory.
     *
     * If a result body is larger than this threshold, the buffer is written to the HTTP channel, and the remaining data is sent directly to the HTTP channel.
     * To ensure that the entire response is buffered, set wait_end_of_query=1. In this case, the data that is not stored in memory will be buffered in a temporary server file.
     *
     * Default: 1
     */
    public wait_end_of_query?: 0 | 1 = 1;

    /**
     * You can enable response buffering on the server-side. The buffer_size and wait_end_of_query URL parameters are provided for this purpose.
     * buffer_size determines the number of bytes in the result to buffer in the server memory.
     *
     * If a result body is larger than this threshold, the buffer is written to the HTTP channel, and the remaining data is sent directly to the HTTP channel.
     * To ensure that the entire response is buffered, set wait_end_of_query=1. In this case, the data that is not stored in memory will be buffered in a temporary server file.
     *
     * Default: 1048576
     */
    public buffer_size?: number = 1048576;
}

export class ClickHouseClientOptions {
    /**
     * ClickHouse Server Identifier
     *
     * Default: CLICKHOUSE_DEFAULT
     */
    public name?: string = 'CLICKHOUSE_DEFAULT';

    /**
     * ClickHouse Host
     *
     * Default: 127.0.0.1
     */
    public host?: string = '127.0.0.1';

    /**
     * ClickHouse Port
     *
     * Default: 8123
     */
    public port?: number = 8123;

    /**
     * ClickHouse Username
     *
     * Default: default
     */
    public username?: string = 'default';

    /**
     * ClickHouse Password
     *
     * Default: <empty>
     */
    public password?: string = '';

    /**
     * ClickHouse Database
     *
     * Default: default
     */
    public database?: string = 'default';

    /**
     * HTTP Interface Protocol
     *
     * Default: HTTP
     */
    public protocol?: ClickHouseConnectionProtocol =
        ClickHouseConnectionProtocol.HTTP;

    /**
     * HTTP Agent
     *
     * `httpAgent` define a custom agent to be used when performing http requests, in node.js.
     * This allows options to be added like `keepAlive` that are not enabled by default.
     *
     * Default: `undefined`
     */
    public httpAgent?: http.Agent;

    /**
     * HTTPS Agent
     *
     * `httpsAgent` define a custom agent to be used when performing https requests in node.js
     * This allows options to be added like `keepAlive` that are not enabled by default.
     *
     * Default: `undefined`
     */
    public httpsAgent?: https.Agent;

    /**
     * HTTP Interface Compression Method
     *
     * Default: NONE
     */
    public compression?: ClickHouseCompressionMethod =
        ClickHouseCompressionMethod.NONE;

    /**
     * Input & Output Data Format
     *
     * Default: JSON
     * @note Currently, only JSON is supported.
     */
    public format?: ClickHouseDataFormat = ClickHouseDataFormat.JSON;

    /**
     * HTTP Interface Connection Settings
     */
    public settings?: ClickHouseSettings = new ClickHouseSettings();

    /**
     * Logger Instance
     *
     * Default: console
     * @note A logger instance must implement `Console` interface
     */
    public logger?: Console = console;

    /**
     * ClickHouse Connection Options
     */
    constructor() {
        if (this.settings) {
            this.settings = Object.assign(
                new ClickHouseSettings(),
                this.settings
            );
        }
    }
}
