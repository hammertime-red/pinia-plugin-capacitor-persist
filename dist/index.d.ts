import { KeysResult } from '@capacitor/preferences';
import { PiniaPluginContext } from 'pinia';
declare type Store = PiniaPluginContext['store'];
declare type RestoredFunction = (store: Store) => void;
export interface PersistOptions {
    enabled: true;
    include?: string[];
    exclude?: string[];
    onRestored?: RestoredFunction;
}
export interface PersistRules {
    include: string[];
    exclude: string[];
}
declare module 'pinia' {
    interface DefineStoreOptionsBase<S, Store> {
        persist?: PersistOptions;
    }
}
export declare const clear: () => Promise<void>;
export declare const removeItem: (key: string) => Promise<void>;
export declare const getKeys: () => Promise<KeysResult>;
export declare const piniaCapacitorPersist: ({ options, store }: PiniaPluginContext) => Promise<void>;
export {};
