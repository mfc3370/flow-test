import React, {Ref} from 'react';
declare type React$DefaultAbstractComponentStatic = React$AbstractComponentStatics;

declare type React$AbstractComponentStatics = {
  ...React$DefaultAbstractComponentStatic,
  // HACK: allows component to be set as static property
  [key: string]: React$AbstractComponent<*, *>,
};

declare type ReduxActionCallback = ?{
    success?: Function,
    failure?: Function,
    always?: Function,
};

declare type ReactRef = Ref<*>;

declare type ReduxSagaGenerator = Generator<*, *, *>;

declare type DOMElement = React.ElementRef<*>
