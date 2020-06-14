import * as React from "react";
import ".style.scss";
interface IProps {
    onChangeSelected: Function;
    labelText: string;
    onOpen: Function;
    forceOnChangeSelected: boolean;
    selectedList: Array<any>;
    DropdownClass?: string;
    optionList: Array<{
        value: string;
        onHoverMsg: React.ReactNode;
        isDisabled: boolean;
        name: string;
    }>;
    searchBoxId?: string;
    isSaveInProgress: boolean;
    hasValidation?: boolean;
    hasError?: boolean;
    showFilter?: boolean;
    dropdownId?: string;
    keyId?: string;
}
declare class SuperDropDown extends React.Component<IProps, any> {
    node: any;
    showFilter: boolean;
    constructor(props: any);
    static defaultProps: {
        dropdownId: "multi-select-dropdown";
        showFilter: false;
        DropdownClass: "";
        selectedList: [];
        searchBoxId: "multi-select-dropdown-search";
        isSaveInProgress: false;
        hasValidation: false;
        hasError: false;
        forceOnChangeSelected: false;
        optionList: [];
    };
    componentWillMount: () => void;
    componentDidMount: () => void;
    componentDidUpdate: (prevProps: {
        optionList: any;
    }) => void;
    componentWillUnmount: () => void;
    onSelect: (event: {
        target: {
            checked: any;
        };
    }, item_id: any) => void;
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
    }) => void;
    handleOutsideClick: (e: {
        target: any;
    }) => void;
    render(): JSX.Element;
}
export default SuperDropDown;
