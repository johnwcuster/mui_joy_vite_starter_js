// import * as React from "react";
import React, { Component } from "react";

// used for layout
import Stack from "@mui/joy/Stack";
// 2 different types of icon buttons
import SvgIcon from "@mui/joy/SvgIcon"; // Inline <svg>
import IconButton from "@mui/joy/IconButton"; // Imported MUI icons
import Tooltip from "@mui/joy/Tooltip"; // Wrap in tooltip
import { createSvgIcon } from "@mui/material/utils";

// Useful icons from https://mui.com/material-ui/material-icons
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import AddBoxIcon from "@mui/icons-material/AddBox";
import AddIcon from "@mui/icons-material/Add";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArticleIcon from "@mui/icons-material/Article";
import AssessmentIcon from "@mui/icons-material/Assessment";
import BackspaceIcon from "@mui/icons-material/Backspace";
import BarChartIcon from "@mui/icons-material/BarChart";
import BlockIcon from "@mui/icons-material/Block";
import BubbleChartIcon from "@mui/icons-material/BubbleChart";
import BubbleChartOutlinedIcon from "@mui/icons-material/BubbleChartOutlined";
import CancelIcon from "@mui/icons-material/Cancel";
import CancelPresentationIcon from "@mui/icons-material/CancelPresentation";
import CategoryIcon from "@mui/icons-material/Category";
import ChangeHistoryIcon from "@mui/icons-material/ChangeHistory";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ClearIcon from "@mui/icons-material/Clear";
import CloseIcon from "@mui/icons-material/Close";
import CropSquareIcon from "@mui/icons-material/CropSquare";
import CurrencyYuanIcon from "@mui/icons-material/CurrencyYuan";
import DashboardIcon from "@mui/icons-material/Dashboard";
import DatasetIcon from "@mui/icons-material/Dataset";
import DescriptionIcon from "@mui/icons-material/Description";
import DisabledByDefaultIcon from "@mui/icons-material/DisabledByDefault";
import DonutLargeIcon from "@mui/icons-material/DonutLarge";
import DonutLargeOutlinedIcon from "@mui/icons-material/DonutLargeOutlined";
import DonutSmallIcon from "@mui/icons-material/DonutSmall";
import DonutSmallOutlinedIcon from "@mui/icons-material/DonutSmallOutlined";
import DownloadDoneIcon from "@mui/icons-material/DownloadDone";
import DownloadIcon from "@mui/icons-material/Download";
import DragHandleIcon from "@mui/icons-material/DragHandle";
import DragIndicatorIcon from "@mui/icons-material/DragIndicator";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Filter1Icon from "@mui/icons-material/Filter1";
import Filter2Icon from "@mui/icons-material/Filter2";
import Filter3Icon from "@mui/icons-material/Filter3";
import Filter4Icon from "@mui/icons-material/Filter4";
import Filter5Icon from "@mui/icons-material/Filter5";
import Filter6Icon from "@mui/icons-material/Filter6";
import Filter7Icon from "@mui/icons-material/Filter7";
import Filter8Icon from "@mui/icons-material/Filter8";
import Filter9Icon from "@mui/icons-material/Filter9";
import Filter9PlusIcon from "@mui/icons-material/Filter9Plus";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import FilterAltOffIcon from "@mui/icons-material/FilterAltOff";
import FilterListIcon from "@mui/icons-material/FilterList";
import FilterListOffIcon from "@mui/icons-material/FilterListOff";
import FirstPageIcon from "@mui/icons-material/FirstPage";
import GitHubIcon from "@mui/icons-material/GitHub";
import GrainIcon from "@mui/icons-material/Grain";
import Grid3x3Icon from "@mui/icons-material/Grid3x3";
import Grid4x4Icon from "@mui/icons-material/Grid4x4";
import GridGoldenratioIcon from "@mui/icons-material/GridGoldenratio";
import GridViewIcon from "@mui/icons-material/GridView";
import HelpIcon from "@mui/icons-material/Help";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import ImportExportIcon from "@mui/icons-material/ImportExport";
import IndeterminateCheckBoxIcon from "@mui/icons-material/IndeterminateCheckBox";
import InfoIcon from "@mui/icons-material/Info";
import InputIcon from "@mui/icons-material/Input";
import LanguageIcon from "@mui/icons-material/Language";
import LastPageIcon from "@mui/icons-material/LastPage";
import LayersClearIcon from "@mui/icons-material/LayersClear";
import LayersIcon from "@mui/icons-material/Layers";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import ManageSearchIcon from "@mui/icons-material/ManageSearch";
import MenuIcon from "@mui/icons-material/Menu";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import OutputIcon from "@mui/icons-material/Output";
import PanToolIcon from "@mui/icons-material/PanTool";
import PieChartOutlineIcon from "@mui/icons-material/PieChartOutline";
import PivotTableChartIcon from "@mui/icons-material/PivotTableChart";
import QueryStatsIcon from "@mui/icons-material/QueryStats";
import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import RedoIcon from "@mui/icons-material/Redo";
import RefreshIcon from "@mui/icons-material/Refresh";
import RemoveIcon from "@mui/icons-material/Remove";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import ScatterPlotIcon from "@mui/icons-material/ScatterPlot";
import SearchIcon from "@mui/icons-material/Search";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import SettingsIcon from "@mui/icons-material/Settings";
import ShowChartIcon from "@mui/icons-material/ShowChart";
import SignalCellularAltIcon from "@mui/icons-material/SignalCellularAlt";
import SortByAlphaIcon from "@mui/icons-material/SortByAlpha";
import SortIcon from "@mui/icons-material/Sort";
import SpaceDashboardIcon from "@mui/icons-material/SpaceDashboard";
import SsidChartIcon from "@mui/icons-material/SsidChart";
import StopCircleIcon from "@mui/icons-material/StopCircle";
import SwapHorizIcon from "@mui/icons-material/SwapHoriz";
import SwapVertIcon from "@mui/icons-material/SwapVert";
import SystemUpdateAltIcon from "@mui/icons-material/SystemUpdateAlt";
import TableChartIcon from "@mui/icons-material/TableChart";
import TocIcon from "@mui/icons-material/Toc";
import ToggleOffIcon from "@mui/icons-material/ToggleOff";
import ToggleOnIcon from "@mui/icons-material/ToggleOn";
import TuneIcon from "@mui/icons-material/Tune";
import UndoIcon from "@mui/icons-material/Undo";
import UploadIcon from "@mui/icons-material/Upload";
import ViewComfyIcon from "@mui/icons-material/ViewComfy";
import ViewCompactIcon from "@mui/icons-material/ViewCompact";
import ViewListIcon from "@mui/icons-material/ViewList";
import ViewModuleIcon from "@mui/icons-material/ViewModule";
import ViewQuiltIcon from "@mui/icons-material/ViewQuilt";
import ViewSidebarIcon from "@mui/icons-material/ViewSidebar";
import WaterfallChartIcon from "@mui/icons-material/WaterfallChart";
import ZoomInIcon from "@mui/icons-material/ZoomIn";
import ZoomInMapIcon from "@mui/icons-material/ZoomInMap";
import ZoomOutIcon from "@mui/icons-material/ZoomOut";
import ZoomOutMapIcon from "@mui/icons-material/ZoomOutMap";
import { BubbleChart } from "@mui/icons-material";

export function BottomPanelCloseIcon(props) {
  return (
    <SvgIcon {...props}>
      createSvgIcon(
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="24"
        viewBox="0 -960 960 960"
        width="24"
      >
        <path d="m480-500 160-160H320l160 160Zm280-340q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560ZM200-320v120h560v-120H200Zm560-80v-360H200v360h560Zm-560 80v120-120Z" />
      </svg>
      , "MysteryIcon" );
    </SvgIcon>
  );
}
export function BottomPanelOpenIcon(props) {
  return (
    <SvgIcon {...props}>
      createSvgIcon(
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="24"
        viewBox="0 -960 960 960"
        width="24"
      >
        <path d="M320-500h320L480-660 320-500ZM200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-200v120h560v-120H200Zm0-80h560v-360H200v360Zm0 80v120-120Z" />
      </svg>
      , "BottomPanelOpenIcon" );
    </SvgIcon>
  );
}
export function FullStackedBarIcon(props) {
  return (
    <SvgIcon {...props}>
      createSvgIcon(
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="24"
        viewBox="0 -960 960 960"
        width="24"
      >
        <path d="M160-160v-120h160v120H160Zm0-160v-160h160v160H160Zm0-200v-280h160v280H160Zm240 360v-280h160v280H400Zm0-320v-160h160v160H400Zm0-200v-120h160v120H400Zm240 520v-80h160v80H640Zm0-120v-160h160v160H640Zm0-200v-320h160v320H640Z" />
      </svg>
      , "FullStackedBarIcon" );
    </SvgIcon>
  );
}
export function LeftPanelCloseIcon(props) {
  return (
    <SvgIcon {...props}>
      createSvgIcon(
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="24"
        viewBox="0 -960 960 960"
        width="24"
      >
        <path d="M660-320v-320L500-480l160 160ZM200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm120-80v-560H200v560h120Zm80 0h360v-560H400v560Zm-80 0H200h120Z" />
      </svg>
      , "LeftPanelCloseIcon" );
    </SvgIcon>
  );
}
export function LeftPanelOpenIcon(props) {
  return (
    <SvgIcon {...props}>
      createSvgIcon(
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="24"
        viewBox="0 -960 960 960"
        width="24"
      >
        <path d="M500-640v320l160-160-160-160ZM200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm120-80v-560H200v560h120Zm80 0h360v-560H400v560Zm-80 0H200h120Z" />
      </svg>
      , "LeftPanelOpenIcon" );
    </SvgIcon>
  );
}
// More Material icons from https://fonts.google.com/icons
export function Level1Icon(props) {
  return (
    <SvgIcon {...props}>
      createSvgIcon(
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="24"
        viewBox="0 -960 960 960"
        width="24"
      >
        <path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm0-80h640v-480H160v480Zm80-80h480v-320H240v320Zm-80 80v-480 480Z" />
      </svg>
      , "Level 1" );
    </SvgIcon>
  );
}
export function Level2Icon(props) {
  return (
    <SvgIcon {...props}>
      createSvgIcon(
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="24"
        viewBox="0 -960 960 960"
        width="24"
      >
        <path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm320-320v240h240v-240H520Zm0-80h240v-240H520v240Zm-80 0v-240H200v240h240Zm0 80H200v240h240v-240Z" />
      </svg>
      , "Level2Icon" );
    </SvgIcon>
  );
}
export function Level3Icon(props) {
  return (
    <SvgIcon {...props}>
      createSvgIcon(
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="24"
        viewBox="0 -960 960 960"
        width="24"
      >
        <path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h133v-133H200v133Zm213 0h134v-133H413v133Zm214 0h133v-133H627v133ZM200-413h133v-134H200v134Zm213 0h134v-134H413v134Zm214 0h133v-134H627v134ZM200-627h133v-133H200v133Zm213 0h134v-133H413v133Zm214 0h133v-133H627v133Z" />
      </svg>
      , "Level3Icon" );
    </SvgIcon>
  );
}
export function Level4Icon(props) {
  return (
    <SvgIcon {...props}>
      createSvgIcon(
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="24"
        viewBox="0 -960 960 960"
        width="24"
      >
        <path d="M200-200h80v-80h-80v80Zm160 0h80v-80h-80v80Zm160 0h80v-80h-80v80Zm160 0h80v-80h-80v80ZM200-680h80v-80h-80v80Zm0 160h80v-80h-80v80Zm0 160h80v-80h-80v80Zm160-320h80v-80h-80v80Zm0 160h80v-80h-80v80Zm0 160h80v-80h-80v80Zm160-320h80v-80h-80v80Zm0 160h80v-80h-80v80Zm0 160h80v-80h-80v80Zm160-320h80v-80h-80v80Zm0 160h80v-80h-80v80Zm0 160h80v-80h-80v80ZM200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Z" />
      </svg>
      , "Level4Icon" );
    </SvgIcon>
  );
}
export function RightPanelCloseIcon(props) {
  return (
    <SvgIcon {...props}>
      createSvgIcon(
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="24"
        viewBox="0 -960 960 960"
        width="24"
      >
        <path d="M300-640v320l160-160-160-160ZM200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm440-80h120v-560H640v560Zm-80 0v-560H200v560h360Zm80 0h120-120Z" />
      </svg>
      , "RightPanelCloseIcon" );
    </SvgIcon>
  );
}
export function RightPanelOpenIcon(props) {
  return (
    <SvgIcon {...props}>
      createSvgIcon(
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="24"
        viewBox="0 -960 960 960"
        width="24"
      >
        <path d="M460-320v-320L300-480l160 160ZM200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm440-80h120v-560H640v560Zm-80 0v-560H200v560h360Zm80 0h120-120Z" />
      </svg>
      , "RightPanelOpenIcon" );
    </SvgIcon>
  );
}
export function TopPanelCloseIcon(props) {
  return (
    <SvgIcon {...props}>
      createSvgIcon(
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="24"
        viewBox="0 -960 960 960"
        width="24"
      >
        <path d="M480-460 320-300h320L480-460ZM200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm560-520v-120H200v120h560Zm-560 80v360h560v-360H200Zm0-80v-120 120Z" />
      </svg>
      , "TopPanelCloseIcon" );
    </SvgIcon>
  );
}
export function TopPanelOpenIcon(props) {
  return (
    <SvgIcon {...props}>
      createSvgIcon(
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="24"
        viewBox="0 -960 960 960"
        width="24"
      >
        <path d="m480-300 160-160H320l160 160ZM200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm560-520v-120H200v120h560Zm-560 80v360h560v-360H200Zm0-80v-120 120Z" />
      </svg>
      , "TopPanelOpenIcon" );
    </SvgIcon>
  );
}

const icon_objects = [
  <AccountBoxIcon />,
  <AddBoxIcon />,
  <AddIcon />,
  <ArrowBackIcon />,
  <ArrowDownwardIcon />,
  <ArrowDropDownIcon />,
  <ArrowDropUpIcon />,
  <ArrowForwardIcon />,
  <ArrowLeftIcon />,
  <ArrowOutwardIcon />,
  <ArrowRightIcon />,
  <ArrowUpwardIcon />,
  <ArticleIcon />,
  <AssessmentIcon />,
  <BackspaceIcon />,
  <BarChartIcon />,
  <BlockIcon />,
  <BottomPanelCloseIcon />,
  <BottomPanelOpenIcon />,
  <BubbleChartIcon />,
  <BubbleChartOutlinedIcon />,
  <CancelIcon />,
  <CancelPresentationIcon />,
  <CategoryIcon />,
  <ChangeHistoryIcon />,
  <CheckBoxIcon />,
  <CheckBoxOutlineBlankIcon />,
  <ChevronLeftIcon />,
  <ChevronRightIcon />,
  <ClearIcon />,
  <CloseIcon />,
  <CropSquareIcon />,
  <CurrencyYuanIcon />,
  <DashboardIcon />,
  <DatasetIcon/>,
  <DescriptionIcon />,
  <DisabledByDefaultIcon />,
  <DonutLargeIcon />,
  <DonutLargeOutlinedIcon />,
  <DonutSmallIcon />,
  <DonutSmallOutlinedIcon />,
  <DownloadDoneIcon />,
  <DownloadIcon />,
  <DragHandleIcon />,
  <DragIndicatorIcon />,
  <ExitToAppIcon />,
  <ExpandLessIcon />,
  <ExpandMoreIcon />,
  <Filter1Icon />,
  <Filter2Icon />,
  <Filter3Icon />,
  <Filter4Icon />,
  <Filter5Icon />,
  <Filter6Icon />,
  <Filter7Icon />,
  <Filter8Icon />,
  <Filter9Icon />,
  <Filter9PlusIcon />,
  <FilterAltIcon />,
  <FilterAltOffIcon />,
  <FilterListIcon />,
  <FilterListOffIcon />,
  <FirstPageIcon />,
  <FullStackedBarIcon />,
  <GitHubIcon />,
  <GrainIcon />,
  <Grid3x3Icon />,
  <Grid4x4Icon />,
  <GridViewIcon />,
  <GridGoldenratioIcon />,
  <HelpIcon />,
  <HelpOutlineIcon />,
  <ImportExportIcon />,
  <IndeterminateCheckBoxIcon />,
  <InfoIcon />,
  <InputIcon />,
  <LanguageIcon />,
  <LastPageIcon />,
  <LayersClearIcon />,
  <LayersIcon />,
  <LeftPanelCloseIcon />,
  <LeftPanelOpenIcon />,
  <Level1Icon />,
  <Level2Icon />,
  <Level3Icon />,
  <Level4Icon />,
  <ManageAccountsIcon />,
  <ManageSearchIcon />,
  <MenuIcon />,
  <MenuOpenIcon />,
  <MoreHorizIcon />,
  <MoreVertIcon />,
  <NavigateBeforeIcon />,
  <NavigateNextIcon />,
  <OutputIcon />,
  <PanToolIcon />,
  <PieChartOutlineIcon />,
  <PivotTableChartIcon />,
  <QueryStatsIcon />,
  <RadioButtonCheckedIcon />,
  <RadioButtonUncheckedIcon />,
  <RedoIcon />,
  <RefreshIcon />,
  <RemoveIcon />,
  <RemoveCircleIcon />,
  <RemoveCircleOutlineIcon />,
  <RestartAltIcon />,
  <RightPanelCloseIcon />,
  <RightPanelOpenIcon />,
  <ScatterPlotIcon />,
  <SearchIcon />,
  <SearchOutlinedIcon />,
  <SettingsIcon />,
  <ShowChartIcon />,
  <SignalCellularAltIcon />,
  <SortByAlphaIcon />,
  <SortIcon />,
  <SpaceDashboardIcon />,
  <SsidChartIcon />,
  <StopCircleIcon />,
  <SwapHorizIcon />,
  <SwapVertIcon />,
  <SystemUpdateAltIcon />,
  <TableChartIcon />,
  <TocIcon />,
  <ToggleOffIcon />,
  <ToggleOnIcon />,
  <TopPanelCloseIcon />,
  <TopPanelOpenIcon />,
  <TuneIcon />,
  <UndoIcon />,
  <UploadIcon />,
  <ViewComfyIcon />,
  <ViewCompactIcon />,
  <ViewListIcon />,
  <ViewModuleIcon />,
  <ViewQuiltIcon />,
  <ViewSidebarIcon />,
  <WaterfallChartIcon />,
  <ZoomInIcon />,
  <ZoomInMapIcon />,
  <ZoomOutIcon />,
  <ZoomOutMapIcon />,
];

const icon_ids = [
  "AccountBoxIcon",
  "AddBoxIcon",
  "AddIcon",
  "ArrowBackIcon",
  "ArrowDownwardIcon",
  "ArrowDropDownIcon",
  "ArrowDropUpIcon",
  "ArrowForwardIcon",
  "ArrowLeftIcon",
  "ArrowOutwardIcon",
  "ArrowRightIcon",
  "ArrowUpwardIcon",
  "ArticleIcon",
  "AssessmentIcon",
  "BackspaceIcon",
  "BarChartIcon",
  "BlockIcon",
  "BottomPanelCloseIcon",
  "BottomPanelOpenIcon",
  "BubbleChartIcon",
  "BubbleChartOutlinedIcon",
  "CancelIcon",
  "CancelPresentationIcon",
  "CategoryIcon",
  "ChangeHistoryIcon",
  "CheckBoxIcon",
  "CheckBoxOutlineBlankIcon",
  "ChevronLeftIcon",
  "ChevronRightIcon",
  "ClearIcon",
  "CloseIcon",
  "CropSquareIcon",
  "CurrencyYuanIcon",
  "DashboardIcon",
  "DatasetIcon",
  "DescriptionIcon",
  "DisabledByDefaultIcon",
  "DonutLargeIcon",
  "DonutLargeOutlinedIcon",
  "DonutSmallIcon",
  "DonutSmallOutlinedIcon",
  "DownloadDoneIcon",
  "DownloadIcon",
  "DragHandleIcon",
  "DragIndicatorIcon",
  "ExitToAppIcon",
  "ExpandLessIcon",
  "ExpandMoreIcon",
  "Filter1Icon",
  "Filter2Icon",
  "Filter3Icon",
  "Filter4Icon",
  "Filter5Icon",
  "Filter6Icon",
  "Filter7Icon",
  "Filter8Icon",
  "Filter9Icon",
  "Filter9PlusIcon",
  "FilterAltIcon",
  "FilterAltOffIcon",
  "FilterListIcon",
  "FilterListOffIcon",
  "FirstPageIcon",
  "FullStackedBarIcon",
  "GitHubIcon",
  "GrainIcon",
  "Grid3x3Icon",
  "Grid4x4Icon",
  "GridViewIcon",
  "GridGoldenratioIcon",
  "HelpIcon",
  "HelpOutlineIcon",
  "ImportExportIcon",
  "IndeterminateCheckBoxIcon",
  "InfoIcon",
  "InputIcon",
  "LanguageIcon",
  "LastPageIcon",
  "LayersClearIcon",
  "LayersIcon",
  "LeftPanelCloseIcon",
  "LeftPanelOpenIcon",
  "Level1Icon",
  "Level2Icon",
  "Level3Icon",
  "Level4Icon",
  "ManageAccountsIcon",
  "ManageSearchIcon",
  "MenuIcon",
  "MenuOpenIcon",
  "MoreHorizIcon",
  "MoreVertIcon",
  "NavigateBeforeIcon",
  "NavigateNextIcon",
  "OutputIcon",
  "PanToolIcon",
  "PieChartOutlineIcon",
  "PivotTableChartIcon",
  "QueryStatsIcon",
  "RadioButtonCheckedIcon",
  "RadioButtonUncheckedIcon",
  "RedoIcon",
  "RefreshIcon",
  "RemoveIcon",
  "RemoveCircleIcon",
  "RemoveCircleOutlineIcon",
  "RestartAltIcon",
  "RightPanelCloseIcon",
  "RightPanelOpenIcon",
  "ScatterPlotIcon",
  "SearchIcon",
  "SearchOutlinedIcon",
  "SettingsIcon",
  "ShowChartIcon",
  "SignalCellularAltIcon",
  "SortByAlphaIcon",
  "SortIcon",
  "SpaceDashboardIcon",
  "SsidChartIcon",
  "StopCircleIcon",
  "SwapHorizIcon",
  "SwapVertIcon",
  "SystemUpdateAltIcon",
  "TableChartIcon",
  "TocIcon",
  "ToggleOffIcon",
  "ToggleOnIcon",
  "TopPanelCloseIcon",
  "TopPanelOpenIcon",
  "TuneIcon",
  "UndoIcon",
  "UploadIcon",
  "ViewComfyIcon",
  "ViewCompactIcon",
  "ViewListIcon",
  "ViewModuleIcon",
  "ViewQuiltIcon",
  "ViewSidebarIcon",
  "WaterfallChartIcon",
  "ZoomInIcon",
  "ZoomInMapIcon",
  "ZoomOutIcon",
  "ZoomOutMapIcon",
];

// Combine the arrays into an array of objects
const combinedArray = icon_objects.map((icon, index) => ({
  id: icon_ids[index],
  label: icon_ids[index],
  component: icon,
}));

export default function IconLibrary({ icons = combinedArray }) {
  return (
    <Stack
      direction="row"
      justifyContent="center"
      alignItems="center"
      flexWrap="wrap"
      spacing={2}
    >
      {icons.map((icon) => (
        <Tooltip key={icon.id} title={icon.label}>
          <IconButton aria-label={icon.label} component="a" href="#">
            {icon.component}
          </IconButton>
        </Tooltip>
      ))}
    </Stack>
  );
}
