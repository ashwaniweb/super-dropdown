import * as React from "react";
import "./assets/scss/styles.scss";
interface IProps {
    onChangeSelected: Function;
    labelText: string;
    optionList: Array<{
        value: string | number;
        onHoverMsg: React.ReactNode;
        isDisabled: boolean;
        text: string;
    }>;
    forceOnChangeSelected?: boolean;
    selectedList?: Array<any>;
    DropdownClass?: string;
    searchBoxId?: string;
    isSaveInProgress?: boolean;
    onOpen?: Function;
    hasValidation?: boolean;
    hasError?: boolean;
    showFilter?: boolean;
    checkbox?: boolean;
    multiple?: boolean;
    dropdownId?: string;
    keyId?: string;
    align?: "left" | "right" | "center";
}
declare class SuperDropDown extends React.Component<IProps, any> {
    static defaultProps: Partial<IProps>;
    constructor(props: any);
    node: any;
    showFilter: boolean;
    componentDidMount: () => void;
    componentDidUpdate: (prevProps: {
        optionList: any;
    }) => void;
    onSelect: (event: {
        target: {
            checked: any;
        };
    }, item: any) => void;
    onSearch: (event: {
        target: {
            value: {
                toString: () => string;
            };
        };
    }) => void;
    onSelectAll: () => void;
    onReset: () => void;
    handleClick: (e: {
        target: {
            type: string;
        };
    } | any) => void;
    handleOutsideClick: (e: {
        target: any;
    }) => void;
    render(): JSX.Element;
}
export default SuperDropDown;
