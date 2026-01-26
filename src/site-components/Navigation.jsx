"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";

const _interactionsData = JSON.parse(
    '{"events":{"e":{"id":"e","name":"","animationType":"preset","eventTypeId":"DROPDOWN_OPEN","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a","playInReverse":false,"autoStopEventId":"e-2"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"301c3cb3-6799-899f-5e8a-7886649a8327","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"301c3cb3-6799-899f-5e8a-7886649a8327","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1740144381833},"e-2":{"id":"e-2","name":"","animationType":"preset","eventTypeId":"DROPDOWN_CLOSE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-2","playInReverse":false,"autoStopEventId":"e"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"301c3cb3-6799-899f-5e8a-7886649a8327","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"301c3cb3-6799-899f-5e8a-7886649a8327","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1740144381833},"e-3":{"id":"e-3","name":"","animationType":"preset","eventTypeId":"DROPDOWN_OPEN","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-3","playInReverse":false,"autoStopEventId":"e-4"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"301c3cb3-6799-899f-5e8a-7886649a83b8","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"301c3cb3-6799-899f-5e8a-7886649a83b8","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1740144381833},"e-4":{"id":"e-4","name":"","animationType":"preset","eventTypeId":"DROPDOWN_CLOSE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-4","playInReverse":false,"autoStopEventId":"e-3"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"301c3cb3-6799-899f-5e8a-7886649a83b8","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"301c3cb3-6799-899f-5e8a-7886649a83b8","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1740144381833}},"actionLists":{"a":{"id":"a","title":"[Nav] Open Mega Nav","actionItemGroups":[{"actionItems":[{"id":"a-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".mega-nav_dropdown-list-wrapper","selectorGuids":["0db77b4c-ba49-83f6-1e79-06fca7be1317"]},"yValue":-1,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}},{"id":"a-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".mega-nav_dropdown-list-wrapper","selectorGuids":["0db77b4c-ba49-83f6-1e79-06fca7be1317"]},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-n-3","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"easeInOut","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".mega-nav_dropdown-list-wrapper","selectorGuids":["0db77b4c-ba49-83f6-1e79-06fca7be1317"]},"yValue":0,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}},{"id":"a-n-4","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"easeInOut","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".mega-nav_dropdown-list-wrapper","selectorGuids":["0db77b4c-ba49-83f6-1e79-06fca7be1317"]},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":true,"createdOn":1740143896872},"a-2":{"id":"a-2","title":"[Nav] Close Mega Nav","actionItemGroups":[{"actionItems":[{"id":"a-2-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"easeOut","duration":200,"target":{"useEventTarget":"CHILDREN","selector":".mega-nav_dropdown-list-wrapper","selectorGuids":["0db77b4c-ba49-83f6-1e79-06fca7be1317"]},"yValue":-1,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}},{"id":"a-2-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"easeOut","duration":200,"target":{"useEventTarget":"CHILDREN","selector":".mega-nav_dropdown-list-wrapper","selectorGuids":["0db77b4c-ba49-83f6-1e79-06fca7be1317"]},"value":0,"unit":""}}]}],"useFirstGroupAsInitialState":false,"createdOn":1740143896872},"a-3":{"id":"a-3","title":"[Nav] Open Drop Down","actionItemGroups":[{"actionItems":[{"id":"a-3-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"easeOut","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".nav-menu_dropdown-list-wrapper","selectorGuids":["0db77b4c-ba49-83f6-1e79-06fca7be1318"]},"yValue":-1,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}},{"id":"a-3-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"easeOut","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".nav-menu_dropdown-list-wrapper","selectorGuids":["0db77b4c-ba49-83f6-1e79-06fca7be1318"]},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-3-n-3","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"easeInOut","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".nav-menu_dropdown-list-wrapper","selectorGuids":["0db77b4c-ba49-83f6-1e79-06fca7be1318"]},"yValue":0,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}},{"id":"a-3-n-4","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"easeInOut","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".nav-menu_dropdown-list-wrapper","selectorGuids":["0db77b4c-ba49-83f6-1e79-06fca7be1318"]},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":true,"createdOn":1740143896872},"a-4":{"id":"a-4","title":"[Nav] Close Drop Down","actionItemGroups":[{"actionItems":[{"id":"a-4-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"easeOut","duration":200,"target":{"useEventTarget":"CHILDREN","selector":".nav-menu_dropdown-list-wrapper","selectorGuids":["0db77b4c-ba49-83f6-1e79-06fca7be1318"]},"yValue":-1,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}},{"id":"a-4-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"easeOut","duration":200,"target":{"useEventTarget":"CHILDREN","selector":".nav-menu_dropdown-list-wrapper","selectorGuids":["0db77b4c-ba49-83f6-1e79-06fca7be1318"]},"value":0,"unit":""}}]}],"useFirstGroupAsInitialState":false,"createdOn":1740143896872}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function Navigation(
    {
        as: _Component = _Builtin.Block
    }
) {
    _interactions.useInteractions(_interactionsData);

    return (
        <_Component className="nav" tag="div"><_Builtin.NavbarWrapper
                className="nav_container"
                tag="div"
                data-animation="default"
                data-easing2="ease"
                data-easing="ease"
                data-collapse="medium"
                role="banner"
                data-no-scroll="1"
                data-duration="400"
                config={{
                    easing: "ease",
                    easing2: "ease",
                    duration: 400,
                    docHeight: false,
                    noScroll: true,
                    animation: "default",
                    collapse: "medium"
                }}><_Builtin.Block
                    className="nav_left"
                    id="w-node-_301c3cb3-6799-899f-5e8a-7886649a831c-649a831a"
                    tag="div"><_Builtin.Link
                        className="nav_logo"
                        id="w-node-_301c3cb3-6799-899f-5e8a-7886649a831d-649a831a"
                        button={false}
                        block="inline"
                        options={{
                            href: "#"
                        }}><_Builtin.Block className="nav_logo-icon" tag="div"><_Builtin.DOM
                                tag="svg"
                                slot=""
                                width="100%"
                                height="100%"
                                viewBox="0 0 33 33"
                                preserveAspectRatio="xMidYMid meet"><_Builtin.DOM
                                    tag="path"
                                    slot=""
                                    d="M28,0H5C2.24,0,0,2.24,0,5v23c0,2.76,2.24,5,5,5h23c2.76,0,5-2.24,5-5V5c0-2.76-2.24-5-5-5ZM29,17c-6.63,0-12,5.37-12,12h-1c0-6.63-5.37-12-12-12v-1c6.63,0,12-5.37,12-12h1c0,6.63,5.37,12,12,12v1Z"
                                    fill="currentColor" /></_Builtin.DOM></_Builtin.Block></_Builtin.Link></_Builtin.Block><_Builtin.Block
                    className="nav_right"
                    id="w-node-_301c3cb3-6799-899f-5e8a-7886649a8323-649a831a"
                    tag="div"><_Builtin.NavbarMenu
                        className="nav_menu"
                        id="w-node-_301c3cb3-6799-899f-5e8a-7886649a8324-649a831a"
                        tag="nav"
                        role="navigation"><_Builtin.List className="nav_menu-list" tag="ul" role="list" unstyled={true}><_Builtin.ListItem className="nav_menu-list-item"><_Builtin.DropdownWrapper
                                    className="nav_dropdown-menu"
                                    data-w-id="301c3cb3-6799-899f-5e8a-7886649a8327"
                                    tag="div"
                                    delay={0}
                                    hover={false}><_Builtin.DropdownToggle className="nav_link" tag="div"><_Builtin.Block tag="div">{"Explore Features"}</_Builtin.Block><_Builtin.Icon
                                            className="nav-caret"
                                            widget={{
                                                type: "icon",
                                                icon: "dropdown-toggle"
                                            }} /></_Builtin.DropdownToggle><_Builtin.DropdownList className="mega-nav_dropdown-list" tag="nav"><_Builtin.Block className="mega-nav_dropdown-list-wrapper" tag="div"><_Builtin.List
                                                className="grid_3-col tablet-1-col gap-medium margin-bottom_none"
                                                tag="ul"
                                                role="list"
                                                unstyled={true}><_Builtin.ListItem
                                                    className="w-node-_301c3cb3-6799-899f-5e8a-7886649a832f-649a831a"
                                                    id="w-node-_016f5a0a-5b63-edde-82c5-e2b2ad6d2e6d-ad6d2e56"><_Builtin.Grid className="grid_3-col tablet-1-col gap-small"><_Builtin.Block tag="div"><_Builtin.Block className="eyebrow" tag="div">{"Core Event Tools"}</_Builtin.Block><_Builtin.List className="mega-nav_list" tag="ul" role="list" unstyled={true}><_Builtin.ListItem
                                                                    className="margin-bottom_none"
                                                                    id="w-node-_301c3cb3-6799-899f-5e8a-7886649a8335-649a831a"><_Builtin.Link
                                                                        className="mega-nav_link-item"
                                                                        button={false}
                                                                        block="inline"
                                                                        options={{
                                                                            href: "#"
                                                                        }}><_Builtin.Block className="icon_medium" tag="div"><_Builtin.DOM
                                                                                tag="svg"
                                                                                slot=""
                                                                                xmlns="http://www.w3.org/2000/svg"
                                                                                width="100%"
                                                                                height="100%"
                                                                                viewBox="0 0 32 32"
                                                                                fill="currentColor"><_Builtin.DOM
                                                                                    tag="path"
                                                                                    slot=""
                                                                                    d="m25.7 9.3l-7-7A.9.9 0 0 0 18 2H8a2.006 2.006 0 0 0-2 2v24a2.006 2.006 0 0 0 2 2h16a2.006 2.006 0 0 0 2-2V10a.9.9 0 0 0-.3-.7M18 4.4l5.6 5.6H18ZM24 28H8V4h8v6a2.006 2.006 0 0 0 2 2h6Z"
                                                                                    stroke-linejoin="round" /></_Builtin.DOM></_Builtin.Block><_Builtin.Block
                                                                            className="w-node-_301c3cb3-6799-899f-5e8a-7886649a833a-649a831a"
                                                                            id="w-node-_016f5a0a-5b63-edde-82c5-e2b2ad6d2e78-ad6d2e56"
                                                                            tag="div"><_Builtin.Block tag="div"><_Builtin.Strong>{"Ticketing"}</_Builtin.Strong></_Builtin.Block><_Builtin.Block className="paragraph_small text-color_secondary" tag="div">{"Sell tickets, manage guests, track sales."}</_Builtin.Block></_Builtin.Block></_Builtin.Link></_Builtin.ListItem><_Builtin.ListItem
                                                                    className="margin-bottom_none"
                                                                    id="w-node-_301c3cb3-6799-899f-5e8a-7886649a8340-649a831a"><_Builtin.Link
                                                                        className="mega-nav_link-item"
                                                                        button={false}
                                                                        block="inline"
                                                                        options={{
                                                                            href: "#"
                                                                        }}><_Builtin.Block className="icon_medium" tag="div"><_Builtin.DOM
                                                                                tag="svg"
                                                                                slot=""
                                                                                xmlns="http://www.w3.org/2000/svg"
                                                                                width="100%"
                                                                                height="100%"
                                                                                viewBox="0 0 32 32"
                                                                                fill="currentColor"><_Builtin.DOM
                                                                                    tag="path"
                                                                                    slot=""
                                                                                    d="m25.7 9.3l-7-7A.9.9 0 0 0 18 2H8a2.006 2.006 0 0 0-2 2v24a2.006 2.006 0 0 0 2 2h16a2.006 2.006 0 0 0 2-2V10a.9.9 0 0 0-.3-.7M18 4.4l5.6 5.6H18ZM24 28H8V4h8v6a2.006 2.006 0 0 0 2 2h6Z"
                                                                                    stroke-linejoin="round" /></_Builtin.DOM></_Builtin.Block><_Builtin.Block
                                                                            className="w-node-_301c3cb3-6799-899f-5e8a-7886649a8345-649a831a"
                                                                            id="w-node-_016f5a0a-5b63-edde-82c5-e2b2ad6d2e83-ad6d2e56"
                                                                            tag="div"><_Builtin.Block tag="div"><_Builtin.Strong>{"Event Pages"}</_Builtin.Strong></_Builtin.Block><_Builtin.Block className="paragraph_small text-color_secondary" tag="div">{"Design stunning, branded event pages fast."}</_Builtin.Block></_Builtin.Block></_Builtin.Link></_Builtin.ListItem><_Builtin.ListItem
                                                                    className="margin-bottom_none"
                                                                    id="w-node-_301c3cb3-6799-899f-5e8a-7886649a834b-649a831a"><_Builtin.Link
                                                                        className="mega-nav_link-item"
                                                                        button={false}
                                                                        block="inline"
                                                                        options={{
                                                                            href: "#"
                                                                        }}><_Builtin.Block className="icon_medium" tag="div"><_Builtin.DOM
                                                                                tag="svg"
                                                                                slot=""
                                                                                xmlns="http://www.w3.org/2000/svg"
                                                                                width="100%"
                                                                                height="100%"
                                                                                viewBox="0 0 32 32"
                                                                                fill="currentColor"><_Builtin.DOM
                                                                                    tag="path"
                                                                                    slot=""
                                                                                    d="m25.7 9.3l-7-7A.9.9 0 0 0 18 2H8a2.006 2.006 0 0 0-2 2v24a2.006 2.006 0 0 0 2 2h16a2.006 2.006 0 0 0 2-2V10a.9.9 0 0 0-.3-.7M18 4.4l5.6 5.6H18ZM24 28H8V4h8v6a2.006 2.006 0 0 0 2 2h6Z"
                                                                                    stroke-linejoin="round" /></_Builtin.DOM></_Builtin.Block><_Builtin.Block
                                                                            className="w-node-_301c3cb3-6799-899f-5e8a-7886649a8350-649a831a"
                                                                            id="w-node-_016f5a0a-5b63-edde-82c5-e2b2ad6d2e8e-ad6d2e56"
                                                                            tag="div"><_Builtin.Block tag="div"><_Builtin.Strong>{"Check-In"}</_Builtin.Strong></_Builtin.Block><_Builtin.Block className="paragraph_small text-color_secondary" tag="div">{"Easy, secure check-in for every event."}</_Builtin.Block></_Builtin.Block></_Builtin.Link></_Builtin.ListItem></_Builtin.List></_Builtin.Block><_Builtin.Block id="w-node-_301c3cb3-6799-899f-5e8a-7886649a8356-649a831a" tag="div"><_Builtin.Block className="eyebrow" tag="div">{"Growth"}</_Builtin.Block><_Builtin.List className="mega-nav_list" tag="ul" role="list" unstyled={true}><_Builtin.ListItem
                                                                    className="margin-bottom_none"
                                                                    id="w-node-_301c3cb3-6799-899f-5e8a-7886649a835a-649a831a"><_Builtin.Link
                                                                        className="mega-nav_link-item"
                                                                        button={false}
                                                                        block="inline"
                                                                        options={{
                                                                            href: "#"
                                                                        }}><_Builtin.Block className="icon_medium" tag="div"><_Builtin.DOM
                                                                                tag="svg"
                                                                                slot=""
                                                                                xmlns="http://www.w3.org/2000/svg"
                                                                                width="100%"
                                                                                height="100%"
                                                                                viewBox="0 0 32 32"
                                                                                fill="currentColor"><_Builtin.DOM
                                                                                    tag="path"
                                                                                    slot=""
                                                                                    d="m25.7 9.3l-7-7A.9.9 0 0 0 18 2H8a2.006 2.006 0 0 0-2 2v24a2.006 2.006 0 0 0 2 2h16a2.006 2.006 0 0 0 2-2V10a.9.9 0 0 0-.3-.7M18 4.4l5.6 5.6H18ZM24 28H8V4h8v6a2.006 2.006 0 0 0 2 2h6Z"
                                                                                    stroke-linejoin="round" /></_Builtin.DOM></_Builtin.Block><_Builtin.Block
                                                                            className="w-node-_301c3cb3-6799-899f-5e8a-7886649a835f-649a831a"
                                                                            id="w-node-_016f5a0a-5b63-edde-82c5-e2b2ad6d2e9d-ad6d2e56"
                                                                            tag="div"><_Builtin.Block tag="div"><_Builtin.Strong>{"Marketing"}</_Builtin.Strong></_Builtin.Block><_Builtin.Block className="paragraph_small text-color_secondary" tag="div">{"Promote events and boost attendance."}</_Builtin.Block></_Builtin.Block></_Builtin.Link></_Builtin.ListItem><_Builtin.ListItem
                                                                    className="margin-bottom_none"
                                                                    id="w-node-_301c3cb3-6799-899f-5e8a-7886649a8365-649a831a"><_Builtin.Link
                                                                        className="mega-nav_link-item"
                                                                        button={false}
                                                                        block="inline"
                                                                        options={{
                                                                            href: "#"
                                                                        }}><_Builtin.Block className="icon_medium" tag="div"><_Builtin.DOM
                                                                                tag="svg"
                                                                                slot=""
                                                                                xmlns="http://www.w3.org/2000/svg"
                                                                                width="100%"
                                                                                height="100%"
                                                                                viewBox="0 0 32 32"
                                                                                fill="currentColor"><_Builtin.DOM
                                                                                    tag="path"
                                                                                    slot=""
                                                                                    d="m25.7 9.3l-7-7A.9.9 0 0 0 18 2H8a2.006 2.006 0 0 0-2 2v24a2.006 2.006 0 0 0 2 2h16a2.006 2.006 0 0 0 2-2V10a.9.9 0 0 0-.3-.7M18 4.4l5.6 5.6H18ZM24 28H8V4h8v6a2.006 2.006 0 0 0 2 2h6Z"
                                                                                    stroke-linejoin="round" /></_Builtin.DOM></_Builtin.Block><_Builtin.Block
                                                                            className="w-node-_301c3cb3-6799-899f-5e8a-7886649a836a-649a831a"
                                                                            id="w-node-_016f5a0a-5b63-edde-82c5-e2b2ad6d2ea8-ad6d2e56"
                                                                            tag="div"><_Builtin.Block tag="div"><_Builtin.Strong>{"Analytics"}</_Builtin.Strong></_Builtin.Block><_Builtin.Block className="paragraph_small text-color_secondary" tag="div">{"Real-time insights and sales reports."}</_Builtin.Block></_Builtin.Block></_Builtin.Link></_Builtin.ListItem><_Builtin.ListItem
                                                                    className="margin-bottom_none"
                                                                    id="w-node-_301c3cb3-6799-899f-5e8a-7886649a8370-649a831a"><_Builtin.Link
                                                                        className="mega-nav_link-item"
                                                                        button={false}
                                                                        block="inline"
                                                                        options={{
                                                                            href: "#"
                                                                        }}><_Builtin.Block className="icon_medium" tag="div"><_Builtin.DOM
                                                                                tag="svg"
                                                                                slot=""
                                                                                xmlns="http://www.w3.org/2000/svg"
                                                                                width="100%"
                                                                                height="100%"
                                                                                viewBox="0 0 32 32"
                                                                                fill="currentColor"><_Builtin.DOM
                                                                                    tag="path"
                                                                                    slot=""
                                                                                    d="m25.7 9.3l-7-7A.9.9 0 0 0 18 2H8a2.006 2.006 0 0 0-2 2v24a2.006 2.006 0 0 0 2 2h16a2.006 2.006 0 0 0 2-2V10a.9.9 0 0 0-.3-.7M18 4.4l5.6 5.6H18ZM24 28H8V4h8v6a2.006 2.006 0 0 0 2 2h6Z"
                                                                                    stroke-linejoin="round" /></_Builtin.DOM></_Builtin.Block><_Builtin.Block
                                                                            className="w-node-_301c3cb3-6799-899f-5e8a-7886649a8375-649a831a"
                                                                            id="w-node-_016f5a0a-5b63-edde-82c5-e2b2ad6d2eb3-ad6d2e56"
                                                                            tag="div"><_Builtin.Block tag="div"><_Builtin.Strong>{"Integrations"}</_Builtin.Strong></_Builtin.Block><_Builtin.Block className="paragraph_small text-color_secondary" tag="div">{"Connect with your favorite tools."}</_Builtin.Block></_Builtin.Block></_Builtin.Link></_Builtin.ListItem></_Builtin.List></_Builtin.Block><_Builtin.Block id="w-node-_301c3cb3-6799-899f-5e8a-7886649a837b-649a831a" tag="div"><_Builtin.Block className="eyebrow" tag="div">{"More"}</_Builtin.Block><_Builtin.List className="mega-nav_list" tag="ul" role="list" unstyled={true}><_Builtin.ListItem
                                                                    className="margin-bottom_none"
                                                                    id="w-node-_301c3cb3-6799-899f-5e8a-7886649a837f-649a831a"><_Builtin.Link
                                                                        className="mega-nav_link-item"
                                                                        button={false}
                                                                        block="inline"
                                                                        options={{
                                                                            href: "#"
                                                                        }}><_Builtin.Block className="icon_medium" tag="div"><_Builtin.DOM
                                                                                tag="svg"
                                                                                slot=""
                                                                                xmlns="http://www.w3.org/2000/svg"
                                                                                width="100%"
                                                                                height="100%"
                                                                                viewBox="0 0 32 32"
                                                                                fill="currentColor"><_Builtin.DOM
                                                                                    tag="path"
                                                                                    slot=""
                                                                                    d="m25.7 9.3l-7-7A.9.9 0 0 0 18 2H8a2.006 2.006 0 0 0-2 2v24a2.006 2.006 0 0 0 2 2h16a2.006 2.006 0 0 0 2-2V10a.9.9 0 0 0-.3-.7M18 4.4l5.6 5.6H18ZM24 28H8V4h8v6a2.006 2.006 0 0 0 2 2h6Z"
                                                                                    stroke-linejoin="round" /></_Builtin.DOM></_Builtin.Block><_Builtin.Block
                                                                            className="w-node-_301c3cb3-6799-899f-5e8a-7886649a8384-649a831a"
                                                                            id="w-node-_016f5a0a-5b63-edde-82c5-e2b2ad6d2ec2-ad6d2e56"
                                                                            tag="div"><_Builtin.Block tag="div"><_Builtin.Strong>{"Merch Sales"}</_Builtin.Strong></_Builtin.Block><_Builtin.Block className="paragraph_small text-color_secondary" tag="div">{"Sell shirts, books, and more at checkout."}</_Builtin.Block></_Builtin.Block></_Builtin.Link></_Builtin.ListItem><_Builtin.ListItem
                                                                    className="margin-bottom_none"
                                                                    id="w-node-_301c3cb3-6799-899f-5e8a-7886649a838a-649a831a"><_Builtin.Link
                                                                        className="mega-nav_link-item"
                                                                        button={false}
                                                                        block="inline"
                                                                        options={{
                                                                            href: "#"
                                                                        }}><_Builtin.Block className="icon_medium" tag="div"><_Builtin.DOM
                                                                                tag="svg"
                                                                                slot=""
                                                                                xmlns="http://www.w3.org/2000/svg"
                                                                                width="100%"
                                                                                height="100%"
                                                                                viewBox="0 0 32 32"
                                                                                fill="currentColor"><_Builtin.DOM
                                                                                    tag="path"
                                                                                    slot=""
                                                                                    d="m25.7 9.3l-7-7A.9.9 0 0 0 18 2H8a2.006 2.006 0 0 0-2 2v24a2.006 2.006 0 0 0 2 2h16a2.006 2.006 0 0 0 2-2V10a.9.9 0 0 0-.3-.7M18 4.4l5.6 5.6H18ZM24 28H8V4h8v6a2.006 2.006 0 0 0 2 2h6Z"
                                                                                    stroke-linejoin="round" /></_Builtin.DOM></_Builtin.Block><_Builtin.Block
                                                                            className="w-node-_301c3cb3-6799-899f-5e8a-7886649a838f-649a831a"
                                                                            id="w-node-_016f5a0a-5b63-edde-82c5-e2b2ad6d2ecd-ad6d2e56"
                                                                            tag="div"><_Builtin.Block tag="div"><_Builtin.Strong>{"Custom Forms"}</_Builtin.Strong></_Builtin.Block><_Builtin.Block className="paragraph_small text-color_secondary" tag="div">{"Collect attendee info your way."}</_Builtin.Block></_Builtin.Block></_Builtin.Link></_Builtin.ListItem><_Builtin.ListItem
                                                                    className="margin-bottom_none"
                                                                    id="w-node-_301c3cb3-6799-899f-5e8a-7886649a8395-649a831a"><_Builtin.Link
                                                                        className="mega-nav_link-item"
                                                                        button={false}
                                                                        block="inline"
                                                                        options={{
                                                                            href: "#"
                                                                        }}><_Builtin.Block className="icon_medium" tag="div"><_Builtin.DOM
                                                                                tag="svg"
                                                                                slot=""
                                                                                xmlns="http://www.w3.org/2000/svg"
                                                                                width="100%"
                                                                                height="100%"
                                                                                viewBox="0 0 32 32"
                                                                                fill="currentColor"><_Builtin.DOM
                                                                                    tag="path"
                                                                                    slot=""
                                                                                    d="m25.7 9.3l-7-7A.9.9 0 0 0 18 2H8a2.006 2.006 0 0 0-2 2v24a2.006 2.006 0 0 0 2 2h16a2.006 2.006 0 0 0 2-2V10a.9.9 0 0 0-.3-.7M18 4.4l5.6 5.6H18ZM24 28H8V4h8v6a2.006 2.006 0 0 0 2 2h6Z"
                                                                                    stroke-linejoin="round" /></_Builtin.DOM></_Builtin.Block><_Builtin.Block
                                                                            className="w-node-_301c3cb3-6799-899f-5e8a-7886649a839a-649a831a"
                                                                            id="w-node-_016f5a0a-5b63-edde-82c5-e2b2ad6d2ed8-ad6d2e56"
                                                                            tag="div"><_Builtin.Block tag="div"><_Builtin.Strong>{"Open Source"}</_Builtin.Strong></_Builtin.Block><_Builtin.Block className="paragraph_small text-color_secondary" tag="div">{"Self-host or go cloud. No lock-in."}</_Builtin.Block></_Builtin.Block></_Builtin.Link></_Builtin.ListItem></_Builtin.List></_Builtin.Block></_Builtin.Grid></_Builtin.ListItem><_Builtin.ListItem
                                                    className="flex_horizontal w-node-_301c3cb3-6799-899f-5e8a-7886649a83a0-649a831a"
                                                    id="w-node-_016f5a0a-5b63-edde-82c5-e2b2ad6d2ede-ad6d2e56"><_Builtin.Link
                                                        className="card-link is-inverse flex-child_expand"
                                                        button={false}
                                                        block="inline"
                                                        options={{
                                                            href: "#"
                                                        }}><_Builtin.Block className="card_body" tag="div"><_Builtin.Block className="heading_h3" tag="div">{"A better way to sell tickets"}</_Builtin.Block><_Builtin.Paragraph className="paragraph_small text-color_inverse-secondary">{"Effortless event management for every organizer."}</_Builtin.Paragraph><_Builtin.Block className="margin_top-auto" tag="div"><_Builtin.Block className="button-group" tag="div"><_Builtin.Block className="text-button is-secondary" tag="div"><_Builtin.Block tag="div">{"Demo"}</_Builtin.Block><_Builtin.Block className="button_icon" tag="div"><_Builtin.DOM
                                                                                tag="svg"
                                                                                slot=""
                                                                                xmlns="http://www.w3.org/2000/svg"
                                                                                width="100%"
                                                                                height="100%"
                                                                                viewBox="0 0 16 16"
                                                                                fill="none"><_Builtin.DOM
                                                                                    tag="path"
                                                                                    slot=""
                                                                                    d="M2 8H14.5M14.5 8L8.5 2M14.5 8L8.5 14"
                                                                                    stroke="currentColor"
                                                                                    stroke-width="2"
                                                                                    stroke-linejoin="round" /></_Builtin.DOM></_Builtin.Block></_Builtin.Block></_Builtin.Block></_Builtin.Block></_Builtin.Block></_Builtin.Link></_Builtin.ListItem></_Builtin.List></_Builtin.Block></_Builtin.DropdownList></_Builtin.DropdownWrapper></_Builtin.ListItem><_Builtin.ListItem className="nav_menu-list-item"><_Builtin.Link
                                    className="nav_link"
                                    button={false}
                                    block="inline"
                                    options={{
                                        href: "#"
                                    }}><_Builtin.Block tag="div">{"Docs"}</_Builtin.Block></_Builtin.Link></_Builtin.ListItem><_Builtin.ListItem className="nav_menu-list-item"><_Builtin.DropdownWrapper
                                    className="nav_dropdown-menu"
                                    data-w-id="301c3cb3-6799-899f-5e8a-7886649a83b8"
                                    tag="div"
                                    delay={0}
                                    hover={false}><_Builtin.DropdownToggle className="nav_link" tag="div"><_Builtin.Block tag="div">{"Support"}</_Builtin.Block><_Builtin.Icon
                                            className="nav-caret"
                                            widget={{
                                                type: "icon",
                                                icon: "dropdown-toggle"
                                            }} /></_Builtin.DropdownToggle><_Builtin.DropdownList className="nav_dropdown-list" tag="div"><_Builtin.Block className="nav-menu_dropdown-list-wrapper" tag="div"><_Builtin.List
                                                className="flex_vertical margin-bottom_none"
                                                tag="ul"
                                                role="list"
                                                unstyled={true}><_Builtin.ListItem className="margin-bottom_none"><_Builtin.Link
                                                        className="nav_dropdown-link"
                                                        button={false}
                                                        block="inline"
                                                        options={{
                                                            href: "#"
                                                        }}><_Builtin.Block className="button_label" tag="div">{"Help"}</_Builtin.Block></_Builtin.Link></_Builtin.ListItem><_Builtin.ListItem className="margin-bottom_none"><_Builtin.Link
                                                        className="nav_dropdown-link"
                                                        button={false}
                                                        block="inline"
                                                        options={{
                                                            href: "#"
                                                        }}><_Builtin.Block className="button_label" tag="div">{"Contact"}</_Builtin.Block></_Builtin.Link></_Builtin.ListItem></_Builtin.List></_Builtin.Block></_Builtin.DropdownList></_Builtin.DropdownWrapper></_Builtin.ListItem></_Builtin.List></_Builtin.NavbarMenu><_Builtin.Block className="button-group margin-top_none" tag="div"><_Builtin.Link
                            className="button"
                            button={false}
                            block="inline"
                            options={{
                                href: "#"
                            }}><_Builtin.Block className="button_label" tag="div">{"Create Event"}</_Builtin.Block></_Builtin.Link></_Builtin.Block></_Builtin.Block><_Builtin.NavbarButton className="nav_mobile-menu-button" tag="div"><_Builtin.Block className="icon" tag="div"><_Builtin.DOM
                            tag="svg"
                            slot=""
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"><_Builtin.DOM
                                tag="g"
                                slot=""
                                _class="nc-icon-wrapper"
                                stroke-linecap="square"
                                stroke-linejoin="miter"
                                stroke-width="1.5"
                                fill="none"
                                stroke="currentColor"
                                stroke-miterlimit="10"><_Builtin.DOM tag="line" slot="" x1="1" y1="12" x2="23" y2="12" stroke="currentColor" /><_Builtin.DOM tag="line" slot="" x1="1" y1="5" x2="23" y2="5" /><_Builtin.DOM tag="line" slot="" x1="1" y1="19" x2="23" y2="19" /></_Builtin.DOM></_Builtin.DOM></_Builtin.Block></_Builtin.NavbarButton></_Builtin.NavbarWrapper></_Component>
    );
}