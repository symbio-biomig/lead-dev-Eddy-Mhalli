/* tslint:disable */
/* eslint-disable */
/**
 * Swagger API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface MessageDTO
 */
export interface MessageDTO {
    /**
     * 
     * @type {string}
     * @memberof MessageDTO
     */
    message: string;
    /**
     * 
     * @type {string}
     * @memberof MessageDTO
     */
    sender: string;
    /**
     * 
     * @type {Date}
     * @memberof MessageDTO
     */
    createdAt: Date;
}

/**
 * Check if a given object implements the MessageDTO interface.
 */
export function instanceOfMessageDTO(value: object): value is MessageDTO {
    if (!('message' in value) || value['message'] === undefined) return false;
    if (!('sender' in value) || value['sender'] === undefined) return false;
    if (!('createdAt' in value) || value['createdAt'] === undefined) return false;
    return true;
}

export function MessageDTOFromJSON(json: any): MessageDTO {
    return MessageDTOFromJSONTyped(json, false);
}

export function MessageDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): MessageDTO {
    if (json == null) {
        return json;
    }
    return {
        
        'message': json['message'],
        'sender': json['sender'],
        'createdAt': (new Date(json['createdAt'])),
    };
}

  export function MessageDTOToJSON(json: any): MessageDTO {
      return MessageDTOToJSONTyped(json, false);
  }

  export function MessageDTOToJSONTyped(value?: MessageDTO | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'message': value['message'],
        'sender': value['sender'],
        'createdAt': ((value['createdAt']).toISOString()),
    };
}

