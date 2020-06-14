import * as React from "react";
import './styles.scss'

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
class SuperDropDown extends React.Component<IProps, any> {
  node: any;
  showFilter = true;

  constructor(props: any) {
    super(props);
    this.state = {
      optionList: this.props.optionList,
      selectedValues: this.props.selectedList,
      filterText: "",
      show: false,
    };
  }

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
  componentWillMount = () => {
    this.props.keyId;
  };
  componentDidMount = () => {};
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
  componentWillUnmount = () => {};

  onSelect = (event: { target: { checked: any } }, item_id: any) => {
    let selectedValues = this.state.selectedValues;
    if (event.target.checked) {
      selectedValues.push(item_id);
    } else {
      let index = selectedValues.indexOf(item_id);
      if (index !== -1) {
        selectedValues.splice(index, 1);
      }
    }
    this.setState({
      selectedValues,
    });

    if (this.props.forceOnChangeSelected) {
      this.props.onChangeSelected(this.props.keyId, selectedValues);
    }
  };

  onSearch = (event: { target: { value: { toString: () => string } } }) => {
    if (event.target.value) {
      let optionList = this.props.optionList.filter(
        (item: { name: { toString: () => string } }) =>
          item.name
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
    this.state.optionList
      .filter((item: { isDisabled: boolean }) => item.isDisabled != true)
      .map((item: { value: any }) => {
        if (selectedValues.indexOf(item.value) < 0) {
          selectedValues.push(item.value);
        }
      });
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

  handleClick = (e: { target: { type: string } }) => {
    if (this.state.show && e.target && e.target.type === "text") {
      return;
    }
    if (!this.state.show) {
      document.addEventListener("click", this.handleOutsideClick, false);
      this.props.onOpen(this.props.keyId);
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
    this.handleClick(e);
    this.props.onChangeSelected(this.props.keyId, this.state.selectedValues);
  };

  render() {
    let validation =
      this.props.hasError && !this.state.show ? "validation" : "";
    return (
      <div
        className={
          `multi-select-dropdown ${this.state.show ? "open " : "closed "}` +
          this.props.DropdownClass
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
          className={
            `multi-select-dropdown-header ${
              this.state.show ? "open" : "closed"
            }` + validation
          }
          onClick={() => this.handleClick}
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
              hidden={!this.state.show}
            />
          )}
          <span
            className={
              this.state.selectedValues.length == 0 ? "hide-total" : ""
            }
            itemID="span_total"
          >
            {this.state.selectedValues.length} Selected
          </span>
        </div>
        <div
          className={`multi-select-dropdown-body ${
            this.state.show ? "open" : "closed"
          }`}
        >
          <ul>
            {this.state.optionList.map(
              (item: {
                value: string | number | undefined;
                onHoverMsg: React.ReactNode;
                isDisabled: boolean | undefined;
                name: React.ReactNode;
              }) => {
                let is_checked =
                  this.state.selectedValues.indexOf(item.value) > -1;
                let labelCass = "";
                if (
                  item.onHoverMsg &&
                  this.props.isSaveInProgress &&
                  is_checked == true &&
                  item.isDisabled == false
                ) {
                  labelCass = "error tooltip";
                } else if (item.onHoverMsg) {
                  labelCass = "tooltip";
                }
                return (
                  <li
                    key={item.value}
                    className={item.isDisabled ? "disabled" : ""}
                  >
                    <label
                      className={labelCass}
                      htmlFor={
                        this.props.dropdownId
                          ? this.props.dropdownId + "-chk-" + item.value
                          : "chk-" + item.value
                      }
                    >
                      <input
                        type="checkbox"
                        id={
                          this.props.dropdownId
                            ? this.props.dropdownId + "-chk-" + item.value
                            : "chk-" + item.value
                        }
                        name={
                          this.props.dropdownId
                            ? this.props.dropdownId + "-chk-" + item.value
                            : "chk-" + item.value
                        }
                        onChange={(value) => this.onSelect(value, item.value)}
                        checked={is_checked}
                        disabled={item.isDisabled}
                      />
                      {item.name}
                      {item.onHoverMsg && (
                        <span className="tooltiptext">
                          {item.onHoverMsg}
                          <i></i>
                        </span>
                      )}
                    </label>
                  </li>
                );
              }
            )}
          </ul>
        </div>
        <div
          className={`multi-select-dropdown-footer ${
            this.state.show ? "open" : "closed"
          }`}
        >
          <button
            type="button"
            className="ui button select-all"
            role="button"
            dangerouslySetInnerHTML={{ __html: "Select All" }}
            onClick={this.onSelectAll}
          />
          <button
            type="button"
            className="ui button select-all"
            role="button"
            dangerouslySetInnerHTML={{ __html: "Reset" }}
            onClick={this.onReset}
          />
        </div>
      </div>
    );
  }
}
export default SuperDropDown;
