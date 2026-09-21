/* @ds-bundle: {"format":4,"namespace":"InstitutionalDesignSystem_b15c1c","components":[{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Icon","sourcePath":"components/core/Icon.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"Badge","sourcePath":"components/data/Badge.jsx"},{"name":"DataTable","sourcePath":"components/data/DataTable.jsx"},{"name":"DeltaValue","sourcePath":"components/data/DeltaValue.jsx"},{"name":"StatTile","sourcePath":"components/data/StatTile.jsx"},{"name":"Tag","sourcePath":"components/data/Tag.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Radio","sourcePath":"components/forms/Radio.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"},{"name":"Card","sourcePath":"components/surfaces/Card.jsx"},{"name":"Dialog","sourcePath":"components/surfaces/Dialog.jsx"},{"name":"Toast","sourcePath":"components/surfaces/Toast.jsx"},{"name":"Tooltip","sourcePath":"components/surfaces/Tooltip.jsx"}],"sourceHashes":{"components/core/Button.jsx":"26f80f4a6da2","components/core/Icon.jsx":"b3a70375434b","components/core/IconButton.jsx":"410c6c98f126","components/data/Badge.jsx":"ead54fbdda52","components/data/DataTable.jsx":"b271a5352ca1","components/data/DeltaValue.jsx":"8de2f9a9e523","components/data/StatTile.jsx":"b9d76452b868","components/data/Tag.jsx":"d5dce884c896","components/forms/Checkbox.jsx":"2cf49fd73281","components/forms/Input.jsx":"ad846a0620b6","components/forms/Radio.jsx":"5688304697fb","components/forms/Select.jsx":"650d2f77edbf","components/forms/Switch.jsx":"ab89d33a7602","components/navigation/Tabs.jsx":"993d0fea3087","components/surfaces/Card.jsx":"d62a847d7c38","components/surfaces/Dialog.jsx":"3e19e722737b","components/surfaces/Toast.jsx":"ee5e2968662f","components/surfaces/Tooltip.jsx":"2b2dd36b13c0","ui_kits/investor_portal/Screens.jsx":"733b0300b743","ui_kits/investor_portal/Shell.jsx":"4a9c3db8f2a4","ui_kits/investor_portal/data.js":"22ae16fd58dc"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.InstitutionalDesignSystem_b15c1c = window.InstitutionalDesignSystem_b15c1c || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Icon.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const SIZES = {
  xs: 12,
  sm: 14,
  md: 16,
  lg: 20,
  xl: 24
};

/** Lucide glyph rendered as a CSS mask so it inherits currentColor. */
function Icon({
  name = 'circle',
  size = 'md',
  color = 'currentColor',
  strokeWidth,
  style,
  ...rest
}) {
  const px = typeof size === 'number' ? size : SIZES[size] || 16;
  const url = `https://unpkg.com/lucide-static@0.487.0/icons/${name}.svg`;
  return /*#__PURE__*/React.createElement("span", _extends({
    role: "img",
    "aria-label": name,
    style: {
      display: 'inline-block',
      flex: '0 0 auto',
      width: px,
      height: px,
      backgroundColor: color,
      WebkitMaskImage: `url(${url})`,
      maskImage: `url(${url})`,
      WebkitMaskRepeat: 'no-repeat',
      maskRepeat: 'no-repeat',
      WebkitMaskSize: 'contain',
      maskSize: 'contain',
      WebkitMaskPosition: 'center',
      maskPosition: 'center',
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Icon.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const H = {
  sm: 'var(--control-h-sm)',
  md: 'var(--control-h)',
  lg: 'var(--control-h-lg)'
};
const PAD = {
  sm: '0 10px',
  md: '0 14px',
  lg: '0 20px'
};
const FS = {
  sm: 'var(--fs-11)',
  md: 'var(--fs-13)',
  lg: 'var(--fs-14)'
};
const VARIANTS = {
  primary: {
    background: 'var(--action-primary-bg)',
    color: 'var(--action-primary-fg)',
    border: '1px solid var(--action-primary-bg)'
  },
  secondary: {
    background: 'var(--action-secondary-bg)',
    color: 'var(--action-secondary-fg)',
    border: '1px solid var(--border-default)'
  },
  ghost: {
    background: 'transparent',
    color: 'var(--action-ghost-fg)',
    border: '1px solid transparent'
  },
  danger: {
    background: 'var(--white)',
    color: 'var(--red-600)',
    border: '1px solid var(--red-200)'
  },
  inverse: {
    background: 'transparent',
    color: 'var(--paper)',
    border: '1px solid var(--border-inverse)'
  }
};
const HOVER = {
  primary: {
    background: 'var(--action-primary-bg-hover)',
    borderColor: 'var(--action-primary-bg-hover)'
  },
  secondary: {
    background: 'var(--surface-hover)',
    borderColor: 'var(--border-strong)'
  },
  ghost: {
    background: 'var(--surface-hover)'
  },
  danger: {
    background: 'var(--red-050)',
    borderColor: 'var(--red-500)'
  },
  inverse: {
    background: 'rgba(255,255,255,.10)'
  }
};
function Button({
  children,
  variant = 'secondary',
  size = 'md',
  iconLeft,
  iconRight,
  disabled = false,
  fullWidth = false,
  type = 'button',
  onClick,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const [down, setDown] = React.useState(false);
  const base = VARIANTS[variant] || VARIANTS.secondary;
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    disabled: disabled,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setDown(false);
    },
    onMouseDown: () => setDown(true),
    onMouseUp: () => setDown(false),
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 'var(--sp-3)',
      height: H[size],
      padding: PAD[size],
      width: fullWidth ? '100%' : undefined,
      font: 'var(--type-label)',
      fontSize: FS[size],
      fontWeight: 'var(--fw-medium)',
      letterSpacing: 'var(--ls-snug)',
      borderRadius: 'var(--radius-control)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      transition: 'var(--transition-control)',
      whiteSpace: 'nowrap',
      ...base,
      ...(hover && !disabled ? HOVER[variant] : null),
      ...(down && !disabled ? {
        filter: 'brightness(.94)'
      } : null),
      ...(disabled ? {
        opacity: .42,
        pointerEvents: 'none'
      } : null),
      ...style
    }
  }, rest), iconLeft && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: iconLeft,
    size: size === 'lg' ? 'md' : 'sm'
  }), children, iconRight && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: iconRight,
    size: size === 'lg' ? 'md' : 'sm'
  }));
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const S = {
  sm: 26,
  md: 32,
  lg: 40
};
function IconButton({
  icon,
  label,
  size = 'md',
  variant = 'ghost',
  disabled = false,
  active = false,
  onClick,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const px = S[size] || 32;
  const skin = variant === 'outline' ? {
    background: 'var(--white)',
    border: '1px solid var(--border-default)'
  } : {
    background: active ? 'var(--surface-selected)' : 'transparent',
    border: '1px solid transparent'
  };
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    "aria-label": label,
    title: label,
    disabled: disabled,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: px,
      height: px,
      borderRadius: 'var(--radius-control)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      color: active ? 'var(--red-600)' : 'var(--ink-600)',
      transition: 'var(--transition-control)',
      ...skin,
      ...(hover && !disabled ? {
        background: active ? 'var(--red-100)' : 'var(--surface-hover)',
        color: 'var(--ink-900)'
      } : null),
      ...(disabled ? {
        opacity: .4,
        pointerEvents: 'none'
      } : null),
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: size === 'lg' ? 'lg' : 'md'
  }));
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/data/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const TONES = {
  neutral: {
    bg: 'var(--ink-050)',
    fg: 'var(--ink-700)',
    bd: 'var(--ink-200)'
  },
  accent: {
    bg: 'var(--red-100)',
    fg: 'var(--red-700)',
    bd: 'var(--red-200)'
  },
  positive: {
    bg: 'var(--status-positive-bg)',
    fg: 'var(--green-600)',
    bd: '#BEDFD2'
  },
  negative: {
    bg: 'var(--status-negative-bg)',
    fg: 'var(--red-700)',
    bd: 'var(--red-200)'
  },
  warning: {
    bg: 'var(--status-warning-bg)',
    fg: '#8A6A00',
    bd: '#EEDDA6'
  },
  info: {
    bg: 'var(--status-info-bg)',
    fg: 'var(--navy-700)',
    bd: '#C6D5E4'
  }
};
function Badge({
  children,
  tone = 'neutral',
  solid = false,
  dot = false,
  style,
  ...rest
}) {
  const t = TONES[tone] || TONES.neutral;
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 'var(--sp-3)',
      height: 18,
      padding: '0 6px',
      font: 'var(--type-eyebrow)',
      letterSpacing: 'var(--ls-caps)',
      textTransform: 'uppercase',
      borderRadius: 'var(--radius-1)',
      background: solid ? t.fg : t.bg,
      color: solid ? '#fff' : t.fg,
      border: '1px solid ' + (solid ? t.fg : t.bd),
      ...style
    }
  }, rest), dot && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 5,
      height: 5,
      borderRadius: 'var(--radius-pill)',
      background: solid ? '#fff' : t.fg
    }
  }), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/Badge.jsx", error: String((e && e.message) || e) }); }

// components/data/DataTable.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function DataTable({
  columns = [],
  rows = [],
  zebra = false,
  dense = false,
  stickyHeader = true,
  sortKey,
  sortDir = 'asc',
  onSort,
  onRowClick,
  emptyText = 'Không có dữ liệu',
  style,
  ...rest
}) {
  const [hoverRow, setHoverRow] = React.useState(-1);
  const h = dense ? 'var(--row-h-sm)' : 'var(--row-h)';
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      border: 'var(--border-card)',
      borderRadius: 'var(--radius-card)',
      background: 'var(--surface-card)',
      overflow: 'auto',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("table", {
    style: {
      width: '100%',
      borderCollapse: 'collapse',
      font: 'var(--type-body)'
    }
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, columns.map(c => /*#__PURE__*/React.createElement("th", {
    key: c.key,
    onClick: () => c.sortable && onSort && onSort(c.key),
    style: {
      position: stickyHeader ? 'sticky' : 'static',
      top: 0,
      zIndex: 1,
      textAlign: c.align || 'left',
      padding: 'var(--sp-3) var(--pad-cell-x)',
      height: 'var(--row-h-sm)',
      font: 'var(--type-eyebrow)',
      letterSpacing: 'var(--ls-caps)',
      textTransform: 'uppercase',
      color: 'var(--text-muted)',
      background: 'var(--paper-2)',
      borderBottom: '1px solid var(--border-default)',
      whiteSpace: 'nowrap',
      cursor: c.sortable ? 'pointer' : 'default',
      width: c.width,
      userSelect: 'none'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 4,
      justifyContent: c.align === 'right' ? 'flex-end' : 'flex-start'
    }
  }, c.header, c.sortable && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: sortKey === c.key ? sortDir === 'asc' ? 'chevron-up' : 'chevron-down' : 'chevrons-up-down',
    size: 11,
    color: sortKey === c.key ? 'var(--red-500)' : 'var(--ink-300)'
  })))))), /*#__PURE__*/React.createElement("tbody", null, rows.length === 0 && /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
    colSpan: columns.length,
    style: {
      padding: 'var(--sp-9)',
      textAlign: 'center',
      color: 'var(--text-faint)',
      font: 'var(--type-caption)'
    }
  }, emptyText)), rows.map((r, i) => /*#__PURE__*/React.createElement("tr", {
    key: r.id ?? i,
    onClick: () => onRowClick && onRowClick(r, i),
    onMouseEnter: () => setHoverRow(i),
    onMouseLeave: () => setHoverRow(-1),
    style: {
      height: h,
      background: hoverRow === i ? 'var(--surface-hover)' : zebra && i % 2 ? 'var(--paper)' : 'transparent',
      cursor: onRowClick ? 'pointer' : 'default',
      transition: 'background-color var(--dur-instant) var(--ease-standard)'
    }
  }, columns.map(c => /*#__PURE__*/React.createElement("td", {
    key: c.key,
    style: {
      padding: 'var(--pad-cell-y) var(--pad-cell-x)',
      textAlign: c.align || 'left',
      borderBottom: 'var(--rule-table)',
      color: 'var(--text-body)',
      whiteSpace: 'nowrap',
      fontVariantNumeric: c.align === 'right' ? 'tabular-nums' : 'normal',
      fontWeight: c.strong ? 'var(--fw-medium)' : 'var(--fw-regular)'
    }
  }, c.render ? c.render(r[c.key], r, i) : r[c.key])))))));
}
Object.assign(__ds_scope, { DataTable });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/DataTable.jsx", error: String((e && e.message) || e) }); }

// components/data/DeltaValue.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Vietnamese market convention: xanh = tăng, đỏ = giảm, tím = trần, xanh lơ = sàn, vàng = tham chiếu. */
const MKT = {
  up: 'var(--mkt-up)',
  down: 'var(--mkt-down)',
  ceiling: 'var(--mkt-ceiling)',
  floor: 'var(--mkt-floor)',
  ref: 'var(--mkt-ref)'
};
function DeltaValue({
  value,
  state,
  size = 'md',
  showArrow = true,
  suffix = '%',
  style,
  ...rest
}) {
  const num = typeof value === 'number' ? value : parseFloat(String(value).replace(',', '.'));
  const s = state || (num > 0 ? 'up' : num < 0 ? 'down' : 'ref');
  const color = MKT[s];
  const sign = num > 0 ? '+' : '';
  const text = typeof value === 'number' ? sign + value.toLocaleString('vi-VN', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }) : value;
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 'var(--sp-2)',
      color,
      font: size === 'lg' ? 'var(--type-data-lg)' : 'var(--type-data)',
      fontSize: size === 'sm' ? 'var(--fs-12)' : undefined,
      fontVariantNumeric: 'tabular-nums',
      ...style
    }
  }, rest), showArrow && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: s === 'down' || s === 'floor' ? 'arrow-down-right' : s === 'ref' ? 'minus' : 'arrow-up-right',
    size: size === 'lg' ? 'md' : 'sm'
  }), text, suffix);
}
Object.assign(__ds_scope, { DeltaValue });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/DeltaValue.jsx", error: String((e && e.message) || e) }); }

// components/data/StatTile.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function StatTile({
  label,
  value,
  unit,
  delta,
  caption,
  icon,
  emphasis = false,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--sp-3)',
      padding: 'var(--pad-card)',
      background: emphasis ? 'var(--bg-inverse)' : 'var(--surface-card)',
      border: emphasis ? '1px solid var(--ink-900)' : 'var(--border-card)',
      borderRadius: 'var(--radius-card)',
      minWidth: 0,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 'var(--sp-4)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-eyebrow)',
      letterSpacing: 'var(--ls-caps)',
      textTransform: 'uppercase',
      color: emphasis ? 'rgba(250,248,245,.62)' : 'var(--text-muted)'
    }
  }, label), icon && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: "sm",
    color: emphasis ? 'rgba(250,248,245,.5)' : 'var(--ink-300)'
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 'var(--sp-3)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-data-lg)',
      fontVariantNumeric: 'tabular-nums',
      letterSpacing: 'var(--ls-tight)',
      color: emphasis ? 'var(--paper)' : 'var(--text-title)'
    }
  }, value), unit && /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-caption)',
      color: emphasis ? 'rgba(250,248,245,.62)' : 'var(--text-muted)'
    }
  }, unit)), (delta || caption) && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--sp-4)'
    }
  }, delta, caption && /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-caption)',
      color: emphasis ? 'rgba(250,248,245,.52)' : 'var(--text-faint)'
    }
  }, caption)));
}
Object.assign(__ds_scope, { StatTile });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/StatTile.jsx", error: String((e && e.message) || e) }); }

// components/data/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Tag({
  children,
  onRemove,
  interactive = false,
  selected = false,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("span", _extends({
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 'var(--sp-3)',
      height: 22,
      padding: '0 8px',
      font: 'var(--type-caption)',
      fontWeight: 'var(--fw-medium)',
      color: selected ? 'var(--red-700)' : 'var(--ink-700)',
      background: selected ? 'var(--red-050)' : hover && interactive ? 'var(--surface-hover)' : 'var(--white)',
      border: '1px solid ' + (selected ? 'var(--red-200)' : 'var(--border-default)'),
      borderRadius: 'var(--radius-2)',
      cursor: interactive ? 'pointer' : 'default',
      transition: 'var(--transition-control)',
      ...style
    }
  }, rest), children, onRemove && /*#__PURE__*/React.createElement("span", {
    onClick: e => {
      e.stopPropagation();
      onRemove(e);
    },
    style: {
      display: 'inline-flex',
      cursor: 'pointer',
      color: 'var(--ink-400)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "x",
    size: 11
  })));
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/Tag.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Checkbox({
  label,
  description,
  checked,
  defaultChecked,
  indeterminate = false,
  disabled = false,
  onChange,
  style,
  ...rest
}) {
  const ref = React.useRef(null);
  React.useEffect(() => {
    if (ref.current) ref.current.indeterminate = indeterminate;
  }, [indeterminate]);
  const controlled = checked !== undefined;
  const [inner, setInner] = React.useState(!!defaultChecked);
  const on = controlled ? checked : inner;
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'inline-flex',
      alignItems: 'flex-start',
      gap: 'var(--sp-4)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? .45 : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("input", _extends({
    ref: ref,
    type: "checkbox",
    checked: on,
    disabled: disabled,
    onChange: e => {
      if (!controlled) setInner(e.target.checked);
      onChange && onChange(e);
    },
    style: {
      position: 'absolute',
      opacity: 0,
      width: 0,
      height: 0
    }
  }, rest)), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 15,
      height: 15,
      marginTop: 1,
      flex: '0 0 auto',
      background: on || indeterminate ? 'var(--red-500)' : 'var(--white)',
      border: '1px solid ' + (on || indeterminate ? 'var(--red-500)' : 'var(--border-strong)'),
      borderRadius: 'var(--radius-1)',
      transition: 'var(--transition-control)'
    }
  }, indeterminate ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "minus",
    size: 11,
    color: "#fff"
  }) : on ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "check",
    size: 11,
    color: "#fff"
  }) : null), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 1
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-body)',
      color: 'var(--text-body)'
    }
  }, label), description && /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-caption)',
      color: 'var(--text-muted)'
    }
  }, description)));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const H = {
  sm: 'var(--control-h-sm)',
  md: 'var(--control-h)',
  lg: 'var(--control-h-lg)'
};
function Input({
  label,
  hint,
  error,
  value,
  defaultValue,
  placeholder,
  iconLeft,
  suffix,
  size = 'md',
  disabled = false,
  required = false,
  align = 'left',
  onChange,
  id,
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const uid = React.useId();
  const inputId = id || uid;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--sp-2)',
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: inputId,
    style: {
      font: 'var(--type-label)',
      color: 'var(--text-body)'
    }
  }, label, required && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--red-500)'
    }
  }, " *")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--sp-3)',
      height: H[size],
      padding: '0 10px',
      background: disabled ? 'var(--surface-disabled)' : 'var(--white)',
      border: '1px solid ' + (error ? 'var(--red-500)' : focus ? 'var(--border-focus)' : 'var(--border-default)'),
      borderRadius: 'var(--radius-control)',
      transition: 'var(--transition-control)',
      boxShadow: focus ? '0 0 0 3px var(--red-100)' : 'none'
    }
  }, iconLeft && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: iconLeft,
    size: "sm",
    color: "var(--ink-400)"
  }), /*#__PURE__*/React.createElement("input", _extends({
    id: inputId,
    value: value,
    defaultValue: defaultValue,
    placeholder: placeholder,
    disabled: disabled,
    onChange: onChange,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      flex: 1,
      minWidth: 0,
      border: 'none',
      outline: 'none',
      background: 'transparent',
      font: 'var(--type-body)',
      color: 'var(--text-title)',
      textAlign: align,
      fontVariantNumeric: align === 'right' ? 'tabular-nums' : 'normal'
    }
  }, rest)), suffix && /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-caption)',
      color: 'var(--text-muted)',
      whiteSpace: 'nowrap'
    }
  }, suffix)), (error || hint) && /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-caption)',
      color: error ? 'var(--red-600)' : 'var(--text-muted)'
    }
  }, error || hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Radio.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Radio({
  label,
  description,
  name,
  value,
  checked,
  disabled = false,
  onChange,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'inline-flex',
      alignItems: 'flex-start',
      gap: 'var(--sp-4)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? .45 : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "radio",
    name: name,
    value: value,
    checked: checked,
    disabled: disabled,
    onChange: onChange,
    style: {
      position: 'absolute',
      opacity: 0,
      width: 0,
      height: 0
    }
  }, rest)), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 15,
      height: 15,
      marginTop: 1,
      flex: '0 0 auto',
      borderRadius: 'var(--radius-pill)',
      background: 'var(--white)',
      border: '1px solid ' + (checked ? 'var(--red-500)' : 'var(--border-strong)'),
      transition: 'var(--transition-control)'
    }
  }, checked && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 7,
      height: 7,
      borderRadius: 'var(--radius-pill)',
      background: 'var(--red-500)'
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 1
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-body)',
      color: 'var(--text-body)'
    }
  }, label), description && /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-caption)',
      color: 'var(--text-muted)'
    }
  }, description)));
}
Object.assign(__ds_scope, { Radio });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Radio.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const H = {
  sm: 'var(--control-h-sm)',
  md: 'var(--control-h)',
  lg: 'var(--control-h-lg)'
};
function Select({
  label,
  hint,
  error,
  options = [],
  value,
  defaultValue,
  placeholder,
  size = 'md',
  disabled = false,
  onChange,
  id,
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const uid = React.useId();
  const selId = id || uid;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--sp-2)',
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: selId,
    style: {
      font: 'var(--type-label)',
      color: 'var(--text-body)'
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      display: 'flex',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("select", _extends({
    id: selId,
    value: value,
    defaultValue: defaultValue,
    disabled: disabled,
    onChange: onChange,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      appearance: 'none',
      width: '100%',
      height: H[size],
      padding: '0 28px 0 10px',
      font: 'var(--type-body)',
      color: 'var(--text-title)',
      background: disabled ? 'var(--surface-disabled)' : 'var(--white)',
      border: '1px solid ' + (error ? 'var(--red-500)' : focus ? 'var(--border-focus)' : 'var(--border-default)'),
      borderRadius: 'var(--radius-control)',
      outline: 'none',
      cursor: disabled ? 'not-allowed' : 'pointer',
      boxShadow: focus ? '0 0 0 3px var(--red-100)' : 'none',
      transition: 'var(--transition-control)'
    }
  }, rest), placeholder && /*#__PURE__*/React.createElement("option", {
    value: ""
  }, placeholder), options.map(o => {
    const v = typeof o === 'string' ? o : o.value;
    const l = typeof o === 'string' ? o : o.label;
    return /*#__PURE__*/React.createElement("option", {
      key: v,
      value: v
    }, l);
  })), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "chevron-down",
    size: "sm",
    color: "var(--ink-500)",
    style: {
      position: 'absolute',
      right: 9,
      pointerEvents: 'none'
    }
  })), (error || hint) && /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-caption)',
      color: error ? 'var(--red-600)' : 'var(--text-muted)'
    }
  }, error || hint));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Switch({
  label,
  description,
  checked,
  defaultChecked,
  disabled = false,
  onChange,
  style,
  ...rest
}) {
  const controlled = checked !== undefined;
  const [inner, setInner] = React.useState(!!defaultChecked);
  const on = controlled ? checked : inner;
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 'var(--sp-5)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? .45 : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "checkbox",
    checked: on,
    disabled: disabled,
    onChange: e => {
      if (!controlled) setInner(e.target.checked);
      onChange && onChange(e.target.checked);
    },
    style: {
      position: 'absolute',
      opacity: 0,
      width: 0,
      height: 0
    }
  }, rest)), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      width: 32,
      height: 18,
      flex: '0 0 auto',
      borderRadius: 'var(--radius-pill)',
      background: on ? 'var(--red-500)' : 'var(--ink-200)',
      transition: 'background-color var(--dur-fast) var(--ease-standard)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 2,
      left: on ? 16 : 2,
      width: 14,
      height: 14,
      borderRadius: 'var(--radius-pill)',
      background: '#fff',
      boxShadow: '0 1px 2px rgba(20,22,26,.28)',
      transition: 'left var(--dur-fast) var(--ease-standard)'
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 1
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-body)',
      color: 'var(--text-body)'
    }
  }, label), description && /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-caption)',
      color: 'var(--text-muted)'
    }
  }, description)));
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Tabs({
  items = [],
  value,
  onChange,
  variant = 'underline',
  size = 'md',
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(null);
  const underline = variant === 'underline';
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "tablist",
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: underline ? 'var(--sp-7)' : 'var(--sp-1)',
      borderBottom: underline ? '1px solid var(--border-hairline)' : 'none',
      background: underline ? 'transparent' : 'var(--paper-2)',
      padding: underline ? 0 : '3px',
      borderRadius: underline ? 0 : 'var(--radius-2)',
      width: underline ? '100%' : 'fit-content',
      ...style
    }
  }, rest), items.map(it => {
    const active = it.value === value;
    const hot = hover === it.value;
    return /*#__PURE__*/React.createElement("button", {
      key: it.value,
      role: "tab",
      "aria-selected": active,
      onClick: () => onChange && onChange(it.value),
      onMouseEnter: () => setHover(it.value),
      onMouseLeave: () => setHover(null),
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: 'var(--sp-3)',
        cursor: 'pointer',
        height: size === 'sm' ? 26 : 32,
        padding: underline ? '0 0 0 0' : '0 12px',
        font: 'var(--type-label)',
        fontSize: size === 'sm' ? 'var(--fs-11)' : 'var(--fs-13)',
        color: active ? underline ? 'var(--text-title)' : 'var(--text-title)' : hot ? 'var(--ink-700)' : 'var(--text-muted)',
        background: underline ? 'transparent' : active ? 'var(--white)' : 'transparent',
        border: 'none',
        borderBottom: underline ? '2px solid ' + (active ? 'var(--red-500)' : 'transparent') : 'none',
        borderRadius: underline ? 0 : 'var(--radius-1)',
        boxShadow: !underline && active ? 'var(--shadow-1)' : 'none',
        transition: 'var(--transition-control)'
      }
    }, it.icon && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: it.icon,
      size: "sm"
    }), it.label, it.count !== undefined && /*#__PURE__*/React.createElement("span", {
      style: {
        font: 'var(--type-caption)',
        color: 'var(--text-faint)',
        fontVariantNumeric: 'tabular-nums'
      }
    }, it.count));
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Card({
  title,
  eyebrow,
  actions,
  footer,
  children,
  padding = 'md',
  tone = 'default',
  style,
  bodyStyle,
  ...rest
}) {
  const pad = padding === 'none' ? 0 : padding === 'sm' ? 'var(--sp-5)' : padding === 'lg' ? 'var(--pad-card-lg)' : 'var(--pad-card)';
  const tones = {
    default: {
      background: 'var(--surface-card)',
      border: 'var(--border-card)'
    },
    sunken: {
      background: 'var(--surface-sunken)',
      border: '1px solid transparent'
    },
    inverse: {
      background: 'var(--bg-inverse)',
      border: '1px solid var(--ink-900)'
    },
    accent: {
      background: 'var(--surface-card)',
      border: '1px solid var(--red-200)'
    }
  };
  const inv = tone === 'inverse';
  return /*#__PURE__*/React.createElement("section", _extends({
    style: {
      display: 'flex',
      flexDirection: 'column',
      borderRadius: 'var(--radius-card)',
      boxShadow: 'var(--shadow-1)',
      minWidth: 0,
      ...tones[tone],
      ...style
    }
  }, rest), (title || actions || eyebrow) && /*#__PURE__*/React.createElement("header", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 'var(--sp-5)',
      padding: 'var(--sp-5) var(--pad-card)',
      borderBottom: '1px solid ' + (inv ? 'var(--border-inverse)' : 'var(--border-hairline)')
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 1,
      minWidth: 0
    }
  }, eyebrow && /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-eyebrow)',
      letterSpacing: 'var(--ls-caps)',
      textTransform: 'uppercase',
      color: inv ? 'rgba(250,248,245,.6)' : 'var(--text-muted)'
    }
  }, eyebrow), title && /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      font: 'var(--type-h3)',
      color: inv ? 'var(--paper)' : 'var(--text-title)'
    }
  }, title)), actions && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--sp-3)',
      flex: '0 0 auto'
    }
  }, actions)), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: pad,
      flex: 1,
      minWidth: 0,
      color: inv ? 'rgba(250,248,245,.86)' : undefined,
      ...bodyStyle
    }
  }, children), footer && /*#__PURE__*/React.createElement("footer", {
    style: {
      padding: 'var(--sp-5) var(--pad-card)',
      borderTop: '1px solid ' + (inv ? 'var(--border-inverse)' : 'var(--border-hairline)'),
      background: inv ? 'transparent' : 'var(--paper)',
      borderBottomLeftRadius: 'var(--radius-card)',
      borderBottomRightRadius: 'var(--radius-card)'
    }
  }, footer));
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/Card.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/Dialog.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Dialog({
  open = false,
  title,
  description,
  children,
  footer,
  width = 520,
  onClose,
  style,
  ...rest
}) {
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    role: "dialog",
    "aria-modal": "true",
    onClick: onClose,
    style: {
      position: 'fixed',
      inset: 0,
      zIndex: 60,
      background: 'var(--overlay-scrim)',
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'center',
      padding: '10vh 24px',
      animation: 'none',
      backdropFilter: 'blur(1.5px)'
    }
  }, /*#__PURE__*/React.createElement("div", _extends({
    onClick: e => e.stopPropagation(),
    style: {
      width: '100%',
      maxWidth: width,
      background: 'var(--surface-card)',
      border: '1px solid var(--border-default)',
      borderRadius: 'var(--radius-modal)',
      boxShadow: 'var(--shadow-3)',
      display: 'flex',
      flexDirection: 'column',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("header", {
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'space-between',
      gap: 'var(--sp-5)',
      padding: 'var(--sp-6) var(--sp-7) var(--sp-5)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--sp-2)'
    }
  }, title && /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      font: 'var(--type-h2)',
      color: 'var(--text-title)'
    }
  }, title), description && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      font: 'var(--type-body)',
      color: 'var(--text-muted)',
      maxWidth: '52ch'
    }
  }, description)), onClose && /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    icon: "x",
    label: "\u0110\xF3ng",
    size: "sm",
    onClick: onClose
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 var(--sp-7) var(--sp-6)'
    }
  }, children), footer && /*#__PURE__*/React.createElement("footer", {
    style: {
      display: 'flex',
      justifyContent: 'flex-end',
      gap: 'var(--sp-4)',
      padding: 'var(--sp-5) var(--sp-7)',
      borderTop: '1px solid var(--border-hairline)',
      background: 'var(--paper)',
      borderBottomLeftRadius: 'var(--radius-modal)',
      borderBottomRightRadius: 'var(--radius-modal)'
    }
  }, footer)));
}
Object.assign(__ds_scope, { Dialog });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/Dialog.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/Toast.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const TONES = {
  info: {
    icon: 'info',
    color: 'var(--navy-500)'
  },
  success: {
    icon: 'check-circle',
    color: 'var(--green-500)'
  },
  warning: {
    icon: 'alert-triangle',
    color: 'var(--amber-500)'
  },
  error: {
    icon: 'alert-octagon',
    color: 'var(--red-500)'
  }
};
function Toast({
  title,
  message,
  tone = 'info',
  action,
  onDismiss,
  style,
  ...rest
}) {
  const t = TONES[tone] || TONES.info;
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "status",
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: 'var(--sp-5)',
      width: 360,
      padding: 'var(--sp-5) var(--sp-5) var(--sp-5) var(--sp-6)',
      background: 'var(--surface-card)',
      border: '1px solid var(--border-default)',
      borderRadius: 'var(--radius-card)',
      boxShadow: 'var(--shadow-3)',
      borderTop: '2px solid ' + t.color,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: t.icon,
    size: "md",
    color: t.color,
    style: {
      marginTop: 1
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--sp-2)',
      minWidth: 0
    }
  }, title && /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-h3)',
      color: 'var(--text-title)'
    }
  }, title), message && /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-caption)',
      color: 'var(--text-muted)'
    }
  }, message), action && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--sp-2)'
    }
  }, action)), onDismiss && /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    icon: "x",
    label: "\u0110\xF3ng th\xF4ng b\xE1o",
    size: "sm",
    onClick: onDismiss
  }));
}
Object.assign(__ds_scope, { Toast });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/Toast.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/Tooltip.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Tooltip({
  label,
  placement = 'top',
  children,
  style,
  ...rest
}) {
  const [show, setShow] = React.useState(false);
  const pos = {
    top: {
      bottom: 'calc(100% + 6px)',
      left: '50%',
      transform: 'translateX(-50%)'
    },
    bottom: {
      top: 'calc(100% + 6px)',
      left: '50%',
      transform: 'translateX(-50%)'
    },
    left: {
      right: 'calc(100% + 6px)',
      top: '50%',
      transform: 'translateY(-50%)'
    },
    right: {
      left: 'calc(100% + 6px)',
      top: '50%',
      transform: 'translateY(-50%)'
    }
  }[placement];
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      position: 'relative',
      display: 'inline-flex',
      ...style
    },
    onMouseEnter: () => setShow(true),
    onMouseLeave: () => setShow(false),
    onFocus: () => setShow(true),
    onBlur: () => setShow(false)
  }, rest), children, show && /*#__PURE__*/React.createElement("span", {
    role: "tooltip",
    style: {
      position: 'absolute',
      zIndex: 70,
      whiteSpace: 'nowrap',
      padding: '4px 8px',
      background: 'var(--ink-900)',
      color: 'var(--paper)',
      font: 'var(--type-caption)',
      borderRadius: 'var(--radius-1)',
      boxShadow: 'var(--shadow-2)',
      pointerEvents: 'none',
      ...pos
    }
  }, label));
}
Object.assign(__ds_scope, { Tooltip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/Tooltip.jsx", error: String((e && e.message) || e) }); }

// ui_kits/investor_portal/Screens.jsx
try { (() => {
const {
  Card,
  DataTable,
  StatTile,
  DeltaValue,
  Badge,
  Tag,
  Tabs,
  Button,
  IconButton,
  Input,
  Select,
  Icon
} = window.InstitutionalDesignSystem_b15c1c;
const D = window.PortalData;
const money = v => /*#__PURE__*/React.createElement("span", {
  style: {
    fontVariantNumeric: 'tabular-nums'
  }
}, v);
function Overview({
  setView
}) {
  const [range, setRange] = React.useState('ytd');
  const cols = [{
    key: 'ma',
    header: 'Mã',
    strong: true,
    width: 60
  }, {
    key: 'ten',
    header: 'Tổ chức niêm yết'
  }, {
    key: 'ty',
    header: 'Tỷ trọng',
    align: 'right',
    width: 88,
    render: v => v.toLocaleString('vi-VN', {
      minimumFractionDigits: 1
    }) + '%'
  }, {
    key: 'gia',
    header: 'Giá',
    align: 'right',
    width: 88
  }, {
    key: 'cl',
    header: '+/−',
    align: 'right',
    width: 96,
    render: (v, r) => /*#__PURE__*/React.createElement(DeltaValue, {
      value: v,
      state: r.st,
      size: "sm"
    })
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--sp-6)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4,1fr)',
      gap: 'var(--sp-4)'
    }
  }, /*#__PURE__*/React.createElement(StatTile, {
    label: "NAV",
    value: "1.284,7",
    unit: "t\u1EF7 VN\u0110",
    delta: /*#__PURE__*/React.createElement(DeltaValue, {
      value: 2.41,
      size: "sm"
    }),
    caption: "so v\u1EDBi phi\xEAn tr\u01B0\u1EDBc",
    icon: "landmark"
  }), /*#__PURE__*/React.createElement(StatTile, {
    label: "L\xE3i/l\u1ED7 h\xF4m nay",
    value: "+18,2",
    unit: "t\u1EF7 VN\u0110",
    delta: /*#__PURE__*/React.createElement(DeltaValue, {
      value: 1.44,
      size: "sm"
    }),
    icon: "trending-up"
  }), /*#__PURE__*/React.createElement(StatTile, {
    label: "Ti\u1EC1n m\u1EB7t",
    value: "212,0",
    unit: "t\u1EF7 VN\u0110",
    caption: "16,5% NAV",
    icon: "wallet"
  }), /*#__PURE__*/React.createElement(StatTile, {
    label: "Hi\u1EC7u su\u1EA5t YTD",
    value: "14,8%",
    emphasis: true,
    delta: /*#__PURE__*/React.createElement(DeltaValue, {
      value: 3.2,
      size: "sm",
      suffix: " \u0111pt"
    }),
    caption: "so v\u1EDBi VN-Index",
    icon: "activity"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.6fr 1fr',
      gap: 'var(--sp-6)',
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement(Card, {
    eyebrow: "Hi\u1EC7u su\u1EA5t",
    title: "Gi\xE1 tr\u1ECB t\xE0i s\u1EA3n r\xF2ng",
    actions: /*#__PURE__*/React.createElement(Tabs, {
      variant: "segmented",
      size: "sm",
      value: range,
      onChange: setRange,
      items: [{
        value: '1t',
        label: '1T'
      }, {
        value: '3t',
        label: '3T'
      }, {
        value: '6t',
        label: '6T'
      }, {
        value: 'ytd',
        label: 'YTD'
      }, {
        value: '1n',
        label: '1N'
      }]
    }),
    footer: /*#__PURE__*/React.createElement("span", {
      style: {
        font: 'var(--type-caption)',
        color: 'var(--text-muted)'
      }
    }, "Ngu\u1ED3n: HOSE \xB7 c\u1EADp nh\u1EADt 09:47 27/08/2026")
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 'var(--sp-5)',
      marginBottom: 'var(--sp-5)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-data-lg)',
      fontVariantNumeric: 'tabular-nums',
      color: 'var(--text-title)'
    }
  }, "1.284,7 t\u1EF7"), /*#__PURE__*/React.createElement(DeltaValue, {
    value: 14.8
  })), /*#__PURE__*/React.createElement(window.Sparkline, {
    points: D.nav,
    w: 620,
    h: 120
  })), /*#__PURE__*/React.createElement(Card, {
    eyebrow: "Ph\xE2n b\u1ED5",
    title: "C\u01A1 c\u1EA5u t\xE0i s\u1EA3n"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      height: 10,
      borderRadius: 2,
      overflow: 'hidden',
      marginBottom: 'var(--sp-6)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 62.4,
      background: 'var(--red-500)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 21.1,
      background: 'var(--navy-500)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 16.5,
      background: 'var(--ink-200)'
    }
  })), [['Cổ phiếu niêm yết', '62,4%', 'var(--red-500)', '801,4 tỷ'], ['Trái phiếu', '21,1%', 'var(--navy-500)', '271,1 tỷ'], ['Tiền mặt & tương đương', '16,5%', 'var(--ink-200)', '212,2 tỷ']].map(([l, p, c, v]) => /*#__PURE__*/React.createElement("div", {
    key: l,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--sp-4)',
      padding: '7px 0',
      borderBottom: 'var(--rule-table)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 8,
      height: 8,
      borderRadius: 2,
      background: c,
      flex: '0 0 auto'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-body)',
      color: 'var(--text-body)',
      flex: 1
    }
  }, l), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-caption)',
      color: 'var(--text-muted)',
      fontVariantNumeric: 'tabular-nums'
    }
  }, v), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-data)',
      color: 'var(--text-title)',
      fontVariantNumeric: 'tabular-nums',
      width: 48,
      textAlign: 'right'
    }
  }, p))))), /*#__PURE__*/React.createElement(Card, {
    eyebrow: "Danh m\u1EE5c",
    title: "V\u1ECB th\u1EBF l\u1EDBn nh\u1EA5t",
    padding: "none",
    actions: /*#__PURE__*/React.createElement(Button, {
      size: "sm",
      variant: "ghost",
      iconRight: "arrow-right",
      onClick: () => setView('danhmuc')
    }, "Xem t\u1EA5t c\u1EA3")
  }, /*#__PURE__*/React.createElement(DataTable, {
    columns: cols,
    rows: D.holdings.slice(0, 5),
    dense: true
  })));
}
function Holdings() {
  const [sortKey, setSortKey] = React.useState('gt');
  const [q, setQ] = React.useState('');
  const rows = D.holdings.filter(r => (r.ma + r.ten).toLowerCase().includes(q.toLowerCase()));
  const cols = [{
    key: 'ma',
    header: 'Mã',
    strong: true,
    width: 60
  }, {
    key: 'ten',
    header: 'Tổ chức niêm yết'
  }, {
    key: 'nganh',
    header: 'Ngành',
    width: 110,
    render: v => /*#__PURE__*/React.createElement(Tag, null, v)
  }, {
    key: 'kl',
    header: 'Khối lượng',
    align: 'right',
    width: 96,
    sortable: true
  }, {
    key: 'gv',
    header: 'Giá vốn',
    align: 'right',
    width: 88
  }, {
    key: 'gia',
    header: 'Giá thị trường',
    align: 'right',
    width: 110,
    sortable: true
  }, {
    key: 'cl',
    header: '+/−',
    align: 'right',
    width: 96,
    render: (v, r) => /*#__PURE__*/React.createElement(DeltaValue, {
      value: v,
      state: r.st,
      size: "sm"
    })
  }, {
    key: 'gt',
    header: 'Giá trị (VNĐ)',
    align: 'right',
    width: 150,
    sortable: true
  }, {
    key: 'ty',
    header: 'Tỷ trọng',
    align: 'right',
    width: 80,
    render: v => v.toLocaleString('vi-VN', {
      minimumFractionDigits: 1
    }) + '%'
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--sp-5)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-end',
      gap: 'var(--sp-4)'
    }
  }, /*#__PURE__*/React.createElement(Input, {
    iconLeft: "search",
    placeholder: "T\xECm m\xE3 ho\u1EB7c t\xEAn t\u1ED5 ch\u1EE9c\u2026",
    value: q,
    onChange: e => setQ(e.target.value),
    style: {
      width: 280
    }
  }), /*#__PURE__*/React.createElement(Select, {
    options: ['Tất cả ngành', 'Ngân hàng', 'Công nghệ', 'Vật liệu', 'Bán lẻ'],
    style: {
      width: 170
    }
  }), /*#__PURE__*/React.createElement(Select, {
    options: ['Tất cả sàn', 'HOSE', 'HNX', 'UPCoM'],
    style: {
      width: 140
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginLeft: 'auto',
      display: 'flex',
      gap: 'var(--sp-3)'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    iconLeft: "download"
  }, "Xu\u1EA5t Excel"), /*#__PURE__*/React.createElement(IconButton, {
    icon: "sliders-horizontal",
    label: "Tu\u1EF3 ch\u1EC9nh c\u1ED9t",
    variant: "outline",
    size: "sm"
  }))), /*#__PURE__*/React.createElement(Card, {
    padding: "none",
    eyebrow: `${rows.length} mã · cập nhật 09:47`,
    title: "V\u1ECB th\u1EBF m\u1EDF"
  }, /*#__PURE__*/React.createElement(DataTable, {
    columns: cols,
    rows: rows,
    sortKey: sortKey,
    sortDir: "desc",
    onSort: setSortKey
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      font: 'var(--type-caption)',
      color: 'var(--text-muted)'
    }
  }, /*#__PURE__*/React.createElement("span", null, "Ngu\u1ED3n: HOSE, HNX \xB7 Gi\xE1 tr\u1EC5 t\u1ED1i \u0111a 60 gi\xE2y."), /*#__PURE__*/React.createElement("span", null, "T\u1ED5ng gi\xE1 tr\u1ECB c\u1ED5 phi\u1EBFu 801,4 t\u1EF7 VN\u0110")));
}
function Orders() {
  const cols = [{
    key: 'tg',
    header: 'Thời gian',
    width: 96
  }, {
    key: 'ma',
    header: 'Mã',
    strong: true,
    width: 60
  }, {
    key: 'lenh',
    header: 'Lệnh',
    width: 76,
    render: v => /*#__PURE__*/React.createElement(Badge, {
      tone: v === 'Mua' ? 'positive' : 'negative'
    }, v)
  }, {
    key: 'kl',
    header: 'Khối lượng',
    align: 'right',
    width: 100
  }, {
    key: 'gia',
    header: 'Giá',
    align: 'right',
    width: 96
  }, {
    key: 'tt',
    header: 'Trạng thái',
    width: 120,
    render: v => /*#__PURE__*/React.createElement(Badge, {
      dot: true,
      tone: v === 'Đã khớp' ? 'positive' : v === 'Huỷ' ? 'neutral' : 'warning'
    }, v)
  }, {
    key: 'x',
    header: '',
    align: 'right',
    width: 44,
    render: () => /*#__PURE__*/React.createElement(IconButton, {
      icon: "more-horizontal",
      label: "Tu\u1EF3 ch\u1ECDn",
      size: "sm"
    })
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--sp-5)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4,1fr)',
      gap: 'var(--sp-4)'
    }
  }, /*#__PURE__*/React.createElement(StatTile, {
    label: "L\u1EC7nh trong ng\xE0y",
    value: "12",
    caption: "9 kh\u1EDBp \xB7 2 ch\u1EDD \xB7 1 hu\u1EF7",
    icon: "arrow-left-right"
  }), /*#__PURE__*/React.createElement(StatTile, {
    label: "Gi\xE1 tr\u1ECB mua",
    value: "2,41",
    unit: "t\u1EF7 VN\u0110",
    icon: "arrow-down-left"
  }), /*#__PURE__*/React.createElement(StatTile, {
    label: "Gi\xE1 tr\u1ECB b\xE1n",
    value: "1,88",
    unit: "t\u1EF7 VN\u0110",
    icon: "arrow-up-right"
  }), /*#__PURE__*/React.createElement(StatTile, {
    label: "Ph\xED & thu\u1EBF",
    value: "6,4",
    unit: "tri\u1EC7u VN\u0110",
    caption: "0,15% gi\xE1 tr\u1ECB",
    icon: "receipt"
  })), /*#__PURE__*/React.createElement(Card, {
    padding: "none",
    eyebrow: "H\xF4m nay \xB7 27/08/2026",
    title: "S\u1ED5 l\u1EC7nh",
    actions: /*#__PURE__*/React.createElement(Button, {
      size: "sm",
      variant: "ghost",
      iconLeft: "calendar"
    }, "Ch\u1ECDn k\u1EF3")
  }, /*#__PURE__*/React.createElement(DataTable, {
    columns: cols,
    rows: D.orders
  })));
}
function Reports() {
  const cols = [{
    key: 'ten',
    header: 'Tài liệu',
    strong: true,
    render: v => /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: 8
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "file-text",
      size: "sm",
      color: "var(--ink-400)"
    }), v)
  }, {
    key: 'loai',
    header: 'Phân loại',
    width: 130,
    render: v => /*#__PURE__*/React.createElement(Tag, null, v)
  }, {
    key: 'ngay',
    header: 'Ngày phát hành',
    width: 130
  }, {
    key: 'kt',
    header: 'Kích thước',
    align: 'right',
    width: 100
  }, {
    key: 'x',
    header: '',
    align: 'right',
    width: 56,
    render: () => /*#__PURE__*/React.createElement(IconButton, {
      icon: "download",
      label: "T\u1EA3i xu\u1ED1ng",
      size: "sm"
    })
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 300px',
      gap: 'var(--sp-6)',
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement(Card, {
    padding: "none",
    eyebrow: "Th\u01B0 vi\u1EC7n",
    title: "B\xE1o c\xE1o & t\xE0i li\u1EC7u",
    actions: /*#__PURE__*/React.createElement(Input, {
      iconLeft: "search",
      placeholder: "T\xECm t\xE0i li\u1EC7u\u2026",
      style: {
        width: 220
      }
    })
  }, /*#__PURE__*/React.createElement(DataTable, {
    columns: cols,
    rows: D.reports
  })), /*#__PURE__*/React.createElement(Card, {
    tone: "inverse",
    eyebrow: "M\u1EDBi nh\u1EA5t",
    title: "Chi\u1EBFn l\u01B0\u1EE3c n\u1EEDa cu\u1ED1i 2026"
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '0 0 12px',
      font: 'var(--type-body)'
    }
  }, "Duy tr\xEC t\u1EF7 tr\u1ECDng c\u1ED5 phi\u1EBFu \u1EDF m\u1EE9c trung t\xEDnh; \u01B0u ti\xEAn ng\xE2n h\xE0ng v\xE0 ti\xEAu d\xF9ng thi\u1EBFt y\u1EBFu."), /*#__PURE__*/React.createElement(Button, {
    variant: "inverse",
    size: "sm",
    iconLeft: "download"
  }, "T\u1EA3i b\u1EA3n PDF")));
}
Object.assign(window, {
  Overview,
  Holdings,
  Orders,
  Reports
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/investor_portal/Screens.jsx", error: String((e && e.message) || e) }); }

// ui_kits/investor_portal/Shell.jsx
try { (() => {
const {
  Icon,
  IconButton,
  Button,
  Badge
} = window.InstitutionalDesignSystem_b15c1c;
function Sparkline({
  points,
  color = 'var(--red-500)',
  w = 180,
  h = 40
}) {
  const min = Math.min(...points),
    max = Math.max(...points);
  const d = points.map((p, i) => `${i / (points.length - 1) * w},${h - (p - min) / (max - min || 1) * h}`).join(' ');
  return /*#__PURE__*/React.createElement("svg", {
    width: w,
    height: h,
    style: {
      display: 'block'
    }
  }, /*#__PURE__*/React.createElement("polyline", {
    points: d,
    fill: "none",
    stroke: color,
    strokeWidth: "1.5"
  }));
}
function Sidebar({
  view,
  setView
}) {
  const items = [{
    k: 'tongquan',
    label: 'Tổng quan',
    icon: 'layout-dashboard'
  }, {
    k: 'danhmuc',
    label: 'Danh mục',
    icon: 'pie-chart'
  }, {
    k: 'giaodich',
    label: 'Giao dịch',
    icon: 'arrow-left-right'
  }, {
    k: 'baocao',
    label: 'Báo cáo',
    icon: 'file-text'
  }];
  return /*#__PURE__*/React.createElement("aside", {
    style: {
      width: 'var(--sidebar-w)',
      flex: '0 0 auto',
      background: 'var(--bg-inverse)',
      display: 'flex',
      flexDirection: 'column',
      height: '100%'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 'var(--topbar-h)',
      display: 'flex',
      alignItems: 'center',
      padding: '0 var(--sp-6)',
      borderBottom: '1px solid var(--border-inverse)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 22,
      color: 'var(--paper)',
      letterSpacing: '-0.01em'
    }
  }, "Institutional")), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 2,
      padding: 'var(--sp-5) var(--sp-4)'
    }
  }, items.map(it => {
    const on = view === it.k;
    return /*#__PURE__*/React.createElement("button", {
      key: it.k,
      onClick: () => setView(it.k),
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 'var(--sp-5)',
        height: 34,
        padding: '0 var(--sp-5)',
        border: 'none',
        cursor: 'pointer',
        borderRadius: 'var(--radius-2)',
        background: on ? 'rgba(255,255,255,.08)' : 'transparent',
        color: on ? 'var(--paper)' : 'rgba(250,248,245,.62)',
        font: 'var(--type-label)',
        textAlign: 'left',
        transition: 'var(--transition-control)',
        boxShadow: on ? 'inset 2px 0 0 var(--red-500)' : 'none'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: it.icon,
      size: "sm"
    }), it.label);
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'auto',
      padding: 'var(--sp-6)',
      borderTop: '1px solid var(--border-inverse)',
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--sp-4)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--type-eyebrow)',
      letterSpacing: 'var(--ls-caps)',
      textTransform: 'uppercase',
      color: 'rgba(250,248,245,.42)'
    }
  }, "T\xE0i kho\u1EA3n"), /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--type-body)',
      color: 'var(--paper)'
    }
  }, "Nguy\u1EC5n Thu H\xE0"), /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--type-caption)',
      color: 'rgba(250,248,245,.5)',
      fontVariantNumeric: 'tabular-nums'
    }
  }, "068C123456 \xB7 U\u1EF7 th\xE1c")));
}
function TopBar({
  title,
  crumb,
  actions,
  onOrder
}) {
  return /*#__PURE__*/React.createElement("header", {
    style: {
      height: 'var(--topbar-h)',
      flex: '0 0 auto',
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--sp-6)',
      padding: '0 var(--gutter-page)',
      background: 'var(--white)',
      borderBottom: '1px solid var(--border-hairline)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 0,
      minWidth: 0
    }
  }, crumb && /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-eyebrow)',
      letterSpacing: 'var(--ls-caps)',
      textTransform: 'uppercase',
      color: 'var(--text-faint)'
    }
  }, crumb), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      font: 'var(--type-h2)',
      color: 'var(--text-title)'
    }
  }, title)), /*#__PURE__*/React.createElement("div", {
    style: {
      marginLeft: 'auto',
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--sp-4)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      font: 'var(--type-caption)',
      color: 'var(--text-muted)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: 99,
      background: 'var(--mkt-up)'
    }
  }), "Phi\xEAn li\xEAn t\u1EE5c \xB7 09:47"), actions, /*#__PURE__*/React.createElement(IconButton, {
    icon: "bell",
    label: "Th\xF4ng b\xE1o",
    size: "sm"
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "sm",
    iconLeft: "plus",
    onClick: onOrder
  }, "\u0110\u1EB7t l\u1EC7nh")));
}
Object.assign(window, {
  Sidebar,
  TopBar,
  Sparkline
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/investor_portal/Shell.jsx", error: String((e && e.message) || e) }); }

// ui_kits/investor_portal/data.js
try { (() => {
window.PortalData = {
  holdings: [{
    id: 1,
    ma: 'VCB',
    ten: 'Ngân hàng TMCP Ngoại thương VN',
    nganh: 'Ngân hàng',
    kl: '120.000',
    gv: '84.100',
    gia: '92.400',
    cl: 2.41,
    gt: '11.088.000.000',
    ty: 18.4
  }, {
    id: 2,
    ma: 'FPT',
    ten: 'CTCP FPT',
    nganh: 'Công nghệ',
    kl: '64.500',
    gv: '142.300',
    gia: '137.800',
    cl: -1.12,
    gt: '8.888.100.000',
    ty: 14.8
  }, {
    id: 3,
    ma: 'HPG',
    ten: 'CTCP Tập đoàn Hoà Phát',
    nganh: 'Vật liệu',
    kl: '310.000',
    gv: '26.400',
    gia: '28.950',
    cl: 6.98,
    st: 'ceiling',
    gt: '8.974.500.000',
    ty: 14.9
  }, {
    id: 4,
    ma: 'MWG',
    ten: 'CTCP Đầu tư Thế Giới Di Động',
    nganh: 'Bán lẻ',
    kl: '96.000',
    gv: '58.700',
    gia: '61.200',
    cl: 0,
    st: 'ref',
    gt: '5.875.200.000',
    ty: 9.8
  }, {
    id: 5,
    ma: 'ACB',
    ten: 'Ngân hàng TMCP Á Châu',
    nganh: 'Ngân hàng',
    kl: '240.000',
    gv: '23.850',
    gia: '24.600',
    cl: 1.24,
    gt: '5.904.000.000',
    ty: 9.8
  }, {
    id: 6,
    ma: 'GAS',
    ten: 'Tổng Công ty Khí Việt Nam',
    nganh: 'Năng lượng',
    kl: '52.000',
    gv: '78.200',
    gia: '71.900',
    cl: -2.05,
    gt: '3.738.800.000',
    ty: 6.2
  }, {
    id: 7,
    ma: 'VNM',
    ten: 'CTCP Sữa Việt Nam',
    nganh: 'Tiêu dùng',
    kl: '70.000',
    gv: '66.400',
    gia: '62.100',
    cl: -6.80,
    st: 'floor',
    gt: '4.347.000.000',
    ty: 7.2
  }, {
    id: 8,
    ma: 'TCB',
    ten: 'Ngân hàng TMCP Kỹ thương VN',
    nganh: 'Ngân hàng',
    kl: '180.000',
    gv: '21.300',
    gia: '22.850',
    cl: 0.88,
    gt: '4.113.000.000',
    ty: 6.8
  }],
  orders: [{
    id: 1,
    tg: '09:42:11',
    ma: 'HPG',
    lenh: 'Mua',
    kl: '50.000',
    gia: '28.950',
    tt: 'Đã khớp'
  }, {
    id: 2,
    tg: '09:31:04',
    ma: 'VCB',
    lenh: 'Bán',
    kl: '20.000',
    gia: '92.400',
    tt: 'Đã khớp'
  }, {
    id: 3,
    tg: '09:18:55',
    ma: 'FPT',
    lenh: 'Mua',
    kl: '10.000',
    gia: '137.000',
    tt: 'Chờ khớp'
  }, {
    id: 4,
    tg: '08:59:30',
    ma: 'VNM',
    lenh: 'Bán',
    kl: '15.000',
    gia: '63.000',
    tt: 'Huỷ'
  }],
  reports: [{
    id: 1,
    ten: 'Báo cáo danh mục Quý II 2026',
    loai: 'Định kỳ',
    ngay: '15/07/2026',
    kt: '2,4 MB'
  }, {
    id: 2,
    ten: 'Chiến lược đầu tư nửa cuối 2026',
    loai: 'Chiến lược',
    ngay: '02/07/2026',
    kt: '5,1 MB'
  }, {
    id: 3,
    ten: 'Sao kê giao dịch tháng 06/2026',
    loai: 'Sao kê',
    ngay: '01/07/2026',
    kt: '0,9 MB'
  }, {
    id: 4,
    ten: 'Báo cáo danh mục Quý I 2026',
    loai: 'Định kỳ',
    ngay: '14/04/2026',
    kt: '2,2 MB'
  }, {
    id: 5,
    ten: 'Bản tin vĩ mô tháng 06/2026',
    loai: 'Nghiên cứu',
    ngay: '28/06/2026',
    kt: '1,3 MB'
  }],
  nav: [62, 61, 63, 64, 63.5, 65, 66, 65.2, 67, 68, 67.4, 69, 70, 71.5, 71, 72.4, 74, 73.2, 75, 76.8, 78, 77.4, 79, 80.6, 82, 81.4, 83, 84.8]
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/investor_portal/data.js", error: String((e && e.message) || e) }); }

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.DataTable = __ds_scope.DataTable;

__ds_ns.DeltaValue = __ds_scope.DeltaValue;

__ds_ns.StatTile = __ds_scope.StatTile;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Tabs = __ds_scope.Tabs;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Dialog = __ds_scope.Dialog;

__ds_ns.Toast = __ds_scope.Toast;

__ds_ns.Tooltip = __ds_scope.Tooltip;

})();
