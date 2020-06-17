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

class SuperDropDown extends React.Component<IProps, any> {
  static defaultProps: Partial<IProps> = {
    dropdownId: "multi-select-dropdown",
    showFilter: false,
    multiple: false,
    DropdownClass: "",
    selectedList: [],
    searchBoxId: "search",
    align: "left",
    isSaveInProgress: false,
    checkbox: false,
    hasValidation: false,
    hasError: false,
    forceOnChangeSelected: false,
    optionList: [],
  };

  constructor(props: any) {
    super(props);
    this.state = {
      optionList: this.props.optionList,
      selectedValues: this.props.selectedList,
      filterText: "",
      show: false,
    };
  }
  // Class level variable
  node: any;
  showFilter = true;
  componentDidMount = () => {
    if (this.node) {
      this.node.parentElement.style.position = "relative";
    }
  };
  componentDidUpdate = (prevProps: { optionList: any }) => {
    if (
      JSON.stringify(prevProps.optionList) !==
      JSON.stringify(this.props.optionList)
    ) {
      this.setState({
        optionList: this.props.optionList,
        selectedValues: this.props.selectedList,
        filterText: "",
        show: false,
      });
    }
  };

  onSelect = (event: { target: { checked: any } }, item: any) => {
    let selectedValues = this.state.selectedValues;
    let filterText = "";
    if (this.props.multiple) {
      if (event.target.checked) {
        selectedValues.push(item.value);
      } else {
        let index = selectedValues.indexOf(item.value);
        if (index !== -1) {
          selectedValues.splice(index, 1);
        }
      }
    } else {
      if (selectedValues.indexOf(item.value) > -1) {
        selectedValues = [];
        filterText = "";
      } else {
        selectedValues = [item.value];
        filterText = item.text;
      }
    }
    this.setState({
      filterText,
      selectedValues,
      show: !this.props.multiple ? false : this.state.show,
    });

    if (this.props.forceOnChangeSelected) {
      this.props.onChangeSelected(this.props.keyId, selectedValues);
    }
  };

  onSearch = (event: { target: { value: { toString: () => string } } }) => {
    if (event.target.value) {
      let optionList = this.props.optionList.filter(
        (item: { text: { toString: () => string } }) =>
          item.text
            .toString()
            .toLowerCase()
            .includes(event.target.value.toString().toLowerCase())
      );
      this.setState({
        optionList,
        filterText: event.target.value,
      });
    } else {
      this.setState({
        optionList: this.props.optionList,
        filterText: event.target.value,
      });
    }
  };

  onSelectAll = () => {
    let selectedValues = this.state.selectedValues;
    if (selectedValues.length === this.state.optionList.length) {
      selectedValues = [];
    } else {
      this.state.optionList
        .filter((item: { isDisabled: boolean }) => item.isDisabled !== true)
        .map((item: { value: any }) => {
          if (selectedValues.indexOf(item.value) < 0) {
            selectedValues.push(item.value);
          }
          return item.value;
        });
    }
    this.setState({
      selectedValues,
    });

    if (this.props.forceOnChangeSelected) {
      this.props.onChangeSelected(this.props.keyId, selectedValues);
    }
  };

  onReset = () => {
    this.setState({
      filterText: "",
      selectedValues: [],
      optionList: this.props.optionList,
    });

    if (this.props.forceOnChangeSelected) {
      this.props.onChangeSelected(this.props.keyId, []);
    }
  };

  handleClick = (e: { target: { type: string } } | any) => {
    if (this.state.show && e.target && e.target.type === "text") {
      return;
    }
    if (!this.state.show) {
      document.addEventListener("click", this.handleOutsideClick, false);
      this.props.onOpen && this.props.onOpen(this.props.keyId);
    } else {
      document.removeEventListener("click", this.handleOutsideClick, false);
    }
    this.setState((prevState: { show: any }) => ({
      show: !prevState.show,
    }));
  };

  handleOutsideClick = (e: { target: any }) => {
    if (this.node.contains(e.target)) {
      return;
    }
    this.handleClick(this);
    this.props.onChangeSelected(this.props.keyId, this.state.selectedValues);
  };

  render() {
    let validation =
      this.props.hasError && !this.state.show ? "validation" : "";
    return (
      <div
        className={
          `multi-select-dropdown ${this.props.align} ${
            this.state.show ? "open " : "closed "
          }` + this.props.DropdownClass
        }
        id={this.props.dropdownId}
        ref={(node) => {
          this.node = node;
        }}
      >
        <label>
          {this.props.labelText}
          {this.props.hasValidation && (
            <span className="req-alert_normal"> (required)</span>
          )}
        </label>
        <div
          className={`header ${
            this.state.show ? "open" : "closed"
          } ${validation}`}
          onClick={this.handleClick}
          tabIndex={0}
        >
          {this.showFilter && (
            <input
              id={this.props.searchBoxId}
              autoComplete="off"
              name="name"
              type="text"
              value={this.state.filterText}
              onChange={(value) => this.onSearch(value)}
              hidden={!this.state.show && this.props.multiple}
            />
          )}
          {this.props.multiple ? (
            <span
              className={`multiple ${
                this.state.selectedValues.length === 0 ? "hide-total" : ""
              }`}
              itemID="span_total"
            >
              {this.state.selectedValues.length} Selected
            </span>
          ) : (
            <span className="single">{this.state.selectedText}</span>
          )}
        </div>
        <div className={`body ${this.state.show ? "open" : "closed"}`}>
          <ul>
            {this.state.optionList.map(
              (item: {
                value: string | number;
                onHoverMsg: React.ReactNode;
                isDisabled: boolean;
                text: string;
              }) => {
                let is_checked =
                  this.state.selectedValues.indexOf(item.value) > -1;
                let labelCass = "";
                if (
                  item.onHoverMsg &&
                  this.props.isSaveInProgress &&
                  is_checked &&
                  !item.isDisabled
                ) {
                  labelCass = "error tooltip";
                } else if (item.onHoverMsg) {
                  labelCass = "tooltip";
                }
                return (
                  <li
                    key={item.value}
                    className={`${item.isDisabled ? "disabled" : ""}${
                      is_checked ? "selected" : ""
                    }`}
                  >
                    <label
                      className={labelCass}
                      htmlFor={this.props.dropdownId + "-chk-" + item.value}
                    >
                      <input
                        type="checkbox"
                        id={this.props.dropdownId + "-chk-" + item.value}
                        name={this.props.dropdownId + "-chk-" + item.value}
                        onChange={(e) => this.onSelect(e, item)}
                        checked={is_checked}
                        disabled={item.isDisabled}
                        hidden={!this.props.checkbox}
                      />
                      {item.text}
                      {
                        // item.onHoverMsg && (
                        //   <span className='tooltiptext'>
                        //     {item.onHoverMsg}
                        //     <i></i>
                        //   </span>
                        // )
                      }
                    </label>
                  </li>
                );
              }
            )}
          </ul>
        </div>
        {this.props.multiple && (
          <div className={`footer ${this.state.show ? "open" : "closed"}`}>
            <button
              type="button"
              className="button select-all"
              dangerouslySetInnerHTML={{ __html: "Select All" }}
              onClick={this.onSelectAll}
            />
            <button
              type="button"
              className="button select-all"
              dangerouslySetInnerHTML={{ __html: "Reset" }}
              onClick={this.onReset}
            />
          </div>
        )}
      </div>
    );
  }
}

export default SuperDropDown;