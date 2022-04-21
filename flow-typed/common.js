import {DEVICE_TYPE} from 'b2c-components/common/utils/device';

declare type DeviceTypeType = $Keys<typeof DEVICE_TYPE>;
declare type ClickEventType = SyntheticMouseEvent<HTMLElement>;
declare type OnClickType<T> = (e: SyntheticMouseEvent<T>) => void;
declare type OnHoverType<T> = (e: SyntheticMouseEvent<T>) => void;
declare type OnAnchorClickType = OnClickType<HTMLAnchorElement>;
declare type OnButtonClickType = OnClickType<HTMLButtonElement>;
declare type OnImageClickType = OnClickType<HTMLImageElement>;
declare type OnAnchorHoverType = OnHoverType<HTMLAnchorElement>;
declare type OnClickHandlerType<T> = (e: T) => void;

declare type OnInputEventType = (e: SyntheticInputEvent<HTMLInputElement>) => void;
declare type OnSelectEventType = (e: SyntheticInputEvent<HTMLSelectElement>) => void;
declare type OnTextAreaEventType = (e: SyntheticInputEvent<HTMLTextAreaElement>) => void;
declare type GenericFunction = (?any) => any;
declare type GenericNonEmptyObject = { [key: string]: any };
