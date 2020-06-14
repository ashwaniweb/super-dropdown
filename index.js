

function ___$insertStyle(css) {
  if (!css) {
    return;
  }
  if (typeof window === 'undefined') {
    return;
  }

  var style = document.createElement('style');

  style.setAttribute('type', 'text/css');
  style.innerHTML = css;
  document.head.appendChild(style);
  return css;
}

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

___$insertStyle("@charset \"UTF-8\";\n.multi-select-dropdown {\n  display: inline-block;\n  width: 100%;\n  padding: 10px 15px 0 15px;\n}\n.multi-select-dropdown .multi-select-dropdown-header input {\n  border: 0;\n  height: auto;\n  flex: 1 1 0;\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);\n}\n.multi-select-dropdown .validation {\n  border: solid 1px #ed1c24;\n}\n.multi-select-dropdown .hide-total {\n  display: none;\n}\n.multi-select-dropdown .tooltip {\n  display: inline-block;\n  position: relative;\n  text-align: left;\n}\n.multi-select-dropdown .tooltip .tooltiptext {\n  top: 21px;\n  left: 36%;\n  width: auto;\n  transform: translate(-50%, 0);\n  padding: 7px 10px;\n  color: #fff;\n  background-color: #5c7080;\n  border-radius: 8px;\n  position: absolute;\n  z-index: 99999999;\n  box-sizing: border-box;\n  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.5);\n  display: none;\n}\n.multi-select-dropdown .tooltip .tooltiptext i {\n  position: absolute;\n  bottom: 100%;\n  left: 50%;\n  margin-left: -12px;\n  width: 24px;\n  height: 12px;\n  overflow: hidden;\n  color: #fff;\n}\n.multi-select-dropdown .tooltip .tooltiptext i::after {\n  content: \"\";\n  position: absolute;\n  width: 12px;\n  height: 12px;\n  left: 50%;\n  transform: translate(-50%, 50%) rotate(45deg);\n  background-color: #5c7080;\n  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.5);\n  color: #fff;\n}\n.multi-select-dropdown .tooltip:hover .tooltiptext {\n  display: block;\n}\n\n.multi-select-dropdown.open {\n  box-shadow: \"#c6bebe26 0px 0px 5px 6px\";\n  border-radius: 6px;\n  position: absolute;\n  z-index: 555555;\n  background: #fff;\n  margin-bottom: 15px;\n}\n\n.multi-select-dropdown-header {\n  border: 1px solid #ddd;\n  color: #182026;\n  width: 100%;\n  min-width: 70px;\n  border-radius: 5px;\n  height: 34px;\n  display: flex;\n  padding: 0 25px 0 0;\n  position: relative;\n  justify-content: space-between;\n}\n.multi-select-dropdown-header:before {\n  content: \"\";\n  display: inline-block;\n  opacity: 1;\n  margin: 0 0.25rem 0 0;\n  width: 1.18em;\n  height: 1em;\n  font-family: Icons;\n  font-style: normal;\n  font-weight: 400;\n  text-decoration: inherit;\n  text-align: center;\n  top: 50%;\n  position: absolute;\n  right: 0;\n  transform: translateY(-50%);\n}\n.multi-select-dropdown-header span {\n  background-color: #5c7080;\n  border: none;\n  border-radius: 3px;\n  color: #f5f8fa;\n  font-size: 12px;\n  padding: 4px 6px;\n  display: flex;\n  justify-content: center;\n  align-items: baseline;\n  margin: 5px;\n}\n\n.multi-select-dropdown-body {\n  background-color: #fff;\n  overflow: auto;\n  z-index: 99;\n  border-radius: 6px;\n  width: 100%;\n  max-height: 350px;\n  margin: 10px 0;\n  display: none;\n}\n.multi-select-dropdown-body input[type=text] {\n  width: 100%;\n}\n.multi-select-dropdown-body input[type=checkbox] {\n  vertical-align: middle;\n  margin-top: -3px;\n}\n.multi-select-dropdown-body .ui.input {\n  font-size: 1em;\n  width: 100%;\n  padding: 10px 10px 12px 10px;\n}\n.multi-select-dropdown-body ul {\n  padding-left: 0px;\n  list-style: none;\n  margin: 0;\n  width: auto;\n}\n.multi-select-dropdown-body ul li {\n  border: 0px;\n  padding: 2px 0;\n}\n.multi-select-dropdown-body ul li label {\n  font-size: 14px;\n  width: auto;\n  cursor: pointer;\n  display: inline-block;\n}\n.multi-select-dropdown-body ul li input {\n  margin-right: 12px;\n}\n.multi-select-dropdown-body ul li.disabled label {\n  color: #a4a3a3;\n}\n.multi-select-dropdown-body li .error {\n  color: #ed1c24;\n}\n\n.multi-select-dropdown-body.open {\n  display: block;\n}\n\n.multi-select-dropdown-footer {\n  padding: 2px 0px;\n  border-top: 1px solid #ddd;\n  display: none;\n  justify-content: space-between;\n  margin-right: -15px;\n  margin-left: -15px;\n  padding-right: 15px;\n  padding-left: 15px;\n}\n.multi-select-dropdown-footer .ui.button {\n  background: none;\n  color: #47bee8;\n  padding-left: 0;\n  padding-right: 0;\n}\n.multi-select-dropdown-footer .ui.button:hover {\n  background: none;\n  color: #47bee8;\n  padding-left: 0;\n  padding-right: 0;\n}\n\n.multi-select-dropdown-footer.open {\n  display: flex;\n}");

var SuperDropDown = /** @class */ (function (_super) {
    __extends(SuperDropDown, _super);
    function SuperDropDown(props) {
        var _this = _super.call(this, props) || this;
        _this.showFilter = true;
        _this.componentWillMount = function () {
            _this.props.keyId;
        };
        _this.componentDidMount = function () { };
        _this.componentDidUpdate = function (prevProps) {
            if (JSON.stringify(prevProps.optionList) !==
                JSON.stringify(_this.props.optionList)) {
                _this.setState({
                    optionList: _this.props.optionList,
                    selectedValues: _this.props.selectedList,
                    filterText: "",
                    show: false,
                });
            }
        };
        _this.componentWillUnmount = function () { };
        _this.onSelect = function (event, item_id) {
            var selectedValues = _this.state.selectedValues;
            if (event.target.checked) {
                selectedValues.push(item_id);
            }
            else {
                var index = selectedValues.indexOf(item_id);
                if (index !== -1) {
                    selectedValues.splice(index, 1);
                }
            }
            _this.setState({
                selectedValues: selectedValues,
            });
            if (_this.props.forceOnChangeSelected) {
                _this.props.onChangeSelected(_this.props.keyId, selectedValues);
            }
        };
        _this.onSearch = function (event) {
            if (event.target.value) {
                var optionList = _this.props.optionList.filter(function (item) {
                    return item.name
                        .toString()
                        .toLowerCase()
                        .includes(event.target.value.toString().toLowerCase());
                });
                _this.setState({
                    optionList: optionList,
                    filterText: event.target.value,
                });
            }
            else {
                _this.setState({
                    optionList: _this.props.optionList,
                    filterText: event.target.value,
                });
            }
        };
        _this.onSelectAll = function () {
            var selectedValues = _this.state.selectedValues;
            _this.state.optionList
                .filter(function (item) { return item.isDisabled != true; })
                .map(function (item) {
                if (selectedValues.indexOf(item.value) < 0) {
                    selectedValues.push(item.value);
                }
            });
            _this.setState({
                selectedValues: selectedValues,
            });
            if (_this.props.forceOnChangeSelected) {
                _this.props.onChangeSelected(_this.props.keyId, selectedValues);
            }
        };
        _this.onReset = function () {
            _this.setState({
                filterText: "",
                selectedValues: [],
                optionList: _this.props.optionList,
            });
            if (_this.props.forceOnChangeSelected) {
                _this.props.onChangeSelected(_this.props.keyId, []);
            }
        };
        _this.handleClick = function (e) {
            if (_this.state.show && e.target && e.target.type === "text") {
                return;
            }
            if (!_this.state.show) {
                document.addEventListener("click", _this.handleOutsideClick, false);
                _this.props.onOpen(_this.props.keyId);
            }
            else {
                document.removeEventListener("click", _this.handleOutsideClick, false);
            }
            _this.setState(function (prevState) { return ({
                show: !prevState.show,
            }); });
        };
        _this.handleOutsideClick = function (e) {
            if (_this.node.contains(e.target)) {
                return;
            }
            _this.handleClick(e);
            _this.props.onChangeSelected(_this.props.keyId, _this.state.selectedValues);
        };
        _this.state = {
            optionList: _this.props.optionList,
            selectedValues: _this.props.selectedList,
            filterText: "",
            show: false,
        };
        return _this;
    }
    SuperDropDown.prototype.render = function () {
        var _this = this;
        var validation = this.props.hasError && !this.state.show ? "validation" : "";
        return (React.createElement("div", { className: "multi-select-dropdown " + (this.state.show ? "open " : "closed ") +
                this.props.DropdownClass, id: this.props.dropdownId, ref: function (node) {
                _this.node = node;
            } },
            React.createElement("label", null,
                this.props.labelText,
                this.props.hasValidation && (React.createElement("span", { className: "req-alert_normal" }, " (required)"))),
            React.createElement("div", { className: "multi-select-dropdown-header " + (this.state.show ? "open" : "closed") + validation, onClick: function () { return _this.handleClick; }, tabIndex: 0 },
                this.showFilter && (React.createElement("input", { id: this.props.searchBoxId, autoComplete: "off", name: "name", type: "text", value: this.state.filterText, onChange: function (value) { return _this.onSearch(value); }, hidden: !this.state.show })),
                React.createElement("span", { className: this.state.selectedValues.length == 0 ? "hide-total" : "", itemID: "span_total" },
                    this.state.selectedValues.length,
                    " Selected")),
            React.createElement("div", { className: "multi-select-dropdown-body " + (this.state.show ? "open" : "closed") },
                React.createElement("ul", null, this.state.optionList.map(function (item) {
                    var is_checked = _this.state.selectedValues.indexOf(item.value) > -1;
                    var labelCass = "";
                    if (item.onHoverMsg &&
                        _this.props.isSaveInProgress &&
                        is_checked == true &&
                        item.isDisabled == false) {
                        labelCass = "error tooltip";
                    }
                    else if (item.onHoverMsg) {
                        labelCass = "tooltip";
                    }
                    return (React.createElement("li", { key: item.value, className: item.isDisabled ? "disabled" : "" },
                        React.createElement("label", { className: labelCass, htmlFor: _this.props.dropdownId
                                ? _this.props.dropdownId + "-chk-" + item.value
                                : "chk-" + item.value },
                            React.createElement("input", { type: "checkbox", id: _this.props.dropdownId
                                    ? _this.props.dropdownId + "-chk-" + item.value
                                    : "chk-" + item.value, name: _this.props.dropdownId
                                    ? _this.props.dropdownId + "-chk-" + item.value
                                    : "chk-" + item.value, onChange: function (value) { return _this.onSelect(value, item.value); }, checked: is_checked, disabled: item.isDisabled }),
                            item.name,
                            item.onHoverMsg && (React.createElement("span", { className: "tooltiptext" },
                                item.onHoverMsg,
                                React.createElement("i", null))))));
                }))),
            React.createElement("div", { className: "multi-select-dropdown-footer " + (this.state.show ? "open" : "closed") },
                React.createElement("button", { type: "button", className: "ui button select-all", role: "button", dangerouslySetInnerHTML: { __html: "Select All" }, onClick: this.onSelectAll }),
                React.createElement("button", { type: "button", className: "ui button select-all", role: "button", dangerouslySetInnerHTML: { __html: "Reset" }, onClick: this.onReset }))));
    };
    return SuperDropDown;
}(React.Component));

exports.default = SuperDropDown;
//# sourceMappingURL=index.js.map
