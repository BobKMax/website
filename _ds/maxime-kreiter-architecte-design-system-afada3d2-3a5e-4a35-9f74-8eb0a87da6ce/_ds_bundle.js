/* @ds-bundle: {"format":4,"namespace":"MaximeKreiterArchitecteDesignSystem_afada3","components":[{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"Caption","sourcePath":"components/editorial/Caption.jsx"},{"name":"ImageFrame","sourcePath":"components/editorial/ImageFrame.jsx"},{"name":"MetaList","sourcePath":"components/editorial/MetaList.jsx"},{"name":"SectionHeading","sourcePath":"components/editorial/SectionHeading.jsx"},{"name":"Wordmark","sourcePath":"components/editorial/Wordmark.jsx"},{"name":"Dialog","sourcePath":"components/feedback/Dialog.jsx"},{"name":"Toast","sourcePath":"components/feedback/Toast.jsx"},{"name":"Tooltip","sourcePath":"components/feedback/Tooltip.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Field","sourcePath":"components/forms/Field.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Radio","sourcePath":"components/forms/Radio.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"Textarea","sourcePath":"components/forms/Textarea.jsx"},{"name":"IndexRow","sourcePath":"components/navigation/IndexRow.jsx"},{"name":"SiteFooter","sourcePath":"components/navigation/SiteFooter.jsx"},{"name":"SiteHeader","sourcePath":"components/navigation/SiteHeader.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"}],"sourceHashes":{"components/core/Badge.jsx":"316371e7fcdb","components/core/Button.jsx":"32a4f698c7b7","components/core/Card.jsx":"d7a9995f4e2c","components/core/IconButton.jsx":"c2cc801b5942","components/core/Tag.jsx":"92b76bfa5a52","components/editorial/Caption.jsx":"5fcc2357536b","components/editorial/ImageFrame.jsx":"42a2b4066536","components/editorial/MetaList.jsx":"4304706edea4","components/editorial/SectionHeading.jsx":"f41a78840b8d","components/editorial/Wordmark.jsx":"a95f8a6de884","components/feedback/Dialog.jsx":"c6ace9d02ef5","components/feedback/Toast.jsx":"e2f802ae7cd3","components/feedback/Tooltip.jsx":"c73803ddad87","components/forms/Checkbox.jsx":"67d2b042f1e6","components/forms/Field.jsx":"6b0c8e005e19","components/forms/Input.jsx":"0ed1d67cf35f","components/forms/Radio.jsx":"8e5d67660af2","components/forms/Select.jsx":"41e0dcfe99f8","components/forms/Switch.jsx":"5347ff33d1de","components/forms/Textarea.jsx":"904a4d8366b0","components/navigation/IndexRow.jsx":"ec014cb9afe1","components/navigation/SiteFooter.jsx":"973bee6b6b7e","components/navigation/SiteHeader.jsx":"239c32044796","components/navigation/Tabs.jsx":"21457cab35e1","ui_kits/documents/CoverSheet.jsx":"f66b26430071","ui_kits/documents/NoteSheet.jsx":"bf3c8ef2a251","ui_kits/documents/ProjectSheet.jsx":"f62839d07f93","ui_kits/documents/Sheet.jsx":"3785a23bce9d","ui_kits/website/AgencyScreen.jsx":"fdbe6966f06b","ui_kits/website/App.jsx":"8851ff14ccdf","ui_kits/website/ContactScreen.jsx":"652a0b5fa43d","ui_kits/website/IndexScreen.jsx":"59569d498c86","ui_kits/website/ProjectScreen.jsx":"44c777f38a68","ui_kits/website/projects.js":"2944b4d49479"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.MaximeKreiterArchitecteDesignSystem_afada3 = window.MaximeKreiterArchitecteDesignSystem_afada3 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const mkBadgeTones = {
  neutral: 'var(--ink-500)',
  positive: 'var(--positive-600)',
  warning: 'var(--warning-600)',
  critical: 'var(--critical-600)'
};
function Badge({
  children,
  tone = 'neutral',
  dot = true,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--text-3xs)',
      letterSpacing: 'var(--tracking-caps)',
      textTransform: 'uppercase',
      color: mkBadgeTones[tone],
      ...style
    }
  }, rest), dot ? /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      width: 5,
      height: 5,
      background: mkBadgeTones[tone],
      flex: '0 0 auto'
    }
  }) : null, children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const mkButtonSizes = {
  sm: {
    height: 'var(--control-h-sm)',
    padding: '0 12px',
    fontSize: 'var(--text-3xs)'
  },
  md: {
    height: 'var(--control-h-md)',
    padding: '0 18px',
    fontSize: 'var(--text-2xs)'
  },
  lg: {
    height: 'var(--control-h-lg)',
    padding: '0 26px',
    fontSize: 'var(--text-xs)'
  }
};
const mkButtonVariants = {
  solid: {
    background: 'var(--surface-inverse)',
    color: 'var(--text-inverse)',
    border: 'var(--hairline) solid var(--ink-900)'
  },
  outline: {
    background: 'transparent',
    color: 'var(--text-primary)',
    border: 'var(--hairline) solid var(--border-strong)'
  },
  quiet: {
    background: 'transparent',
    color: 'var(--text-secondary)',
    border: 'var(--hairline) solid var(--border-hairline)'
  },
  text: {
    background: 'transparent',
    color: 'var(--text-primary)',
    border: 'var(--hairline) solid transparent',
    padding: 0,
    height: 'auto'
  }
};
const mkButtonHover = {
  solid: {
    background: 'var(--sage-700)',
    borderColor: 'var(--sage-700)'
  },
  outline: {
    background: 'var(--ink-900)',
    color: 'var(--text-inverse)'
  },
  quiet: {
    color: 'var(--text-primary)',
    borderColor: 'var(--border-strong)'
  },
  text: {
    color: 'var(--link-hover)'
  }
};
function Button({
  variant = 'outline',
  size = 'md',
  children,
  disabled = false,
  block = false,
  trailing,
  onClick,
  href,
  type = 'button',
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const Tag = href ? 'a' : 'button';
  const composed = {
    display: block ? 'flex' : 'inline-flex',
    width: block ? '100%' : 'auto',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '10px',
    fontFamily: 'var(--font-mono)',
    fontWeight: 'var(--weight-regular)',
    letterSpacing: 'var(--tracking-caps)',
    textTransform: 'uppercase',
    textDecoration: 'none',
    borderRadius: 'var(--radius-none)',
    cursor: disabled ? 'default' : 'pointer',
    opacity: disabled ? 'var(--disabled-opacity)' : 1,
    transition: 'var(--transition-color)',
    ...mkButtonSizes[size],
    ...mkButtonVariants[variant],
    ...(hover && !disabled ? mkButtonHover[variant] : null),
    ...style
  };
  if (variant === 'text') {
    composed.padding = 0;
    composed.height = 'auto';
    composed.borderBottom = 'var(--hairline) solid currentColor';
  }
  return /*#__PURE__*/React.createElement(Tag, _extends({
    href: href,
    type: href ? undefined : type,
    disabled: href ? undefined : disabled,
    onClick: disabled ? undefined : onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: composed
  }, rest), children, trailing ? /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      fontSize: '1.1em',
      lineHeight: 1
    }
  }, trailing) : null);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Card({
  children,
  surface = 'card',
  bordered = true,
  padding = 'md',
  hoverable = false,
  onClick,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const surfaces = {
    card: 'var(--surface-card)',
    page: 'var(--surface-page)',
    raised: 'var(--surface-raised)',
    tint: 'var(--surface-tint)',
    none: 'transparent'
  };
  const pads = {
    none: 0,
    sm: 'var(--s-4)',
    md: 'var(--s-5)',
    lg: 'var(--s-6)'
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      background: surfaces[surface],
      border: bordered ? 'var(--hairline) solid var(--border-hairline)' : 'none',
      borderRadius: 'var(--radius-none)',
      boxShadow: 'var(--shadow-none)',
      padding: pads[padding],
      cursor: onClick ? 'pointer' : 'default',
      transition: 'var(--transition-color)',
      ...(hoverable && hover ? {
        borderColor: 'var(--border-strong)'
      } : null),
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const mkIconButtonSizes = {
  sm: 28,
  md: 36,
  lg: 44
};
function IconButton({
  glyph = '\u00D7',
  label,
  size = 'md',
  bordered = false,
  disabled = false,
  onClick,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const d = mkIconButtonSizes[size];
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    "aria-label": label,
    disabled: disabled,
    onClick: disabled ? undefined : onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      width: d,
      height: d,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'transparent',
      borderRadius: 'var(--radius-none)',
      border: bordered ? 'var(--hairline) solid var(--border-strong)' : 'var(--hairline) solid transparent',
      color: hover && !disabled ? 'var(--link-hover)' : 'var(--text-primary)',
      fontFamily: 'var(--font-sans)',
      fontSize: size === 'sm' ? 14 : size === 'md' ? 17 : 20,
      lineHeight: 1,
      cursor: disabled ? 'default' : 'pointer',
      opacity: disabled ? 'var(--disabled-opacity)' : 1,
      transition: 'var(--transition-color)',
      padding: 0,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true"
  }, glyph));
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Tag({
  children,
  tone = 'neutral',
  active = false,
  onClick,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const tones = {
    neutral: {
      color: 'var(--text-meta)',
      borderColor: 'var(--border-mid)'
    },
    accent: {
      color: 'var(--text-accent)',
      borderColor: 'var(--sage-500)'
    },
    tint: {
      color: 'var(--ink-700)',
      borderColor: 'var(--tint-200)'
    }
  };
  const interactive = typeof onClick === 'function';
  return /*#__PURE__*/React.createElement("span", _extends({
    role: interactive ? 'button' : undefined,
    tabIndex: interactive ? 0 : undefined,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      height: 22,
      padding: '0 8px',
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--text-3xs)',
      letterSpacing: 'var(--tracking-caps)',
      textTransform: 'uppercase',
      whiteSpace: 'nowrap',
      borderRadius: 'var(--radius-none)',
      border: 'var(--hairline) solid',
      background: active ? 'var(--ink-900)' : 'transparent',
      cursor: interactive ? 'pointer' : 'default',
      transition: 'var(--transition-color)',
      ...tones[tone],
      ...(active ? {
        color: 'var(--text-inverse)',
        borderColor: 'var(--ink-900)'
      } : null),
      ...(hover && interactive && !active ? {
        color: 'var(--text-primary)',
        borderColor: 'var(--border-strong)'
      } : null),
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/editorial/Caption.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Caption({
  children,
  index,
  credit,
  align = 'start',
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("figcaption", _extends({
    style: {
      display: 'flex',
      gap: 'var(--s-3)',
      alignItems: 'baseline',
      justifyContent: align === 'end' ? 'flex-end' : 'flex-start',
      fontSize: 'var(--type-caption-size)',
      lineHeight: 'var(--type-caption-leading)',
      color: 'var(--text-secondary)',
      paddingTop: 'var(--s-1)',
      ...style
    }
  }, rest), index ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--text-3xs)',
      letterSpacing: 'var(--tracking-caps)',
      color: 'var(--text-muted)',
      flex: '0 0 auto'
    }
  }, index) : null, /*#__PURE__*/React.createElement("span", null, children, credit ? /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-muted)'
    }
  }, ' \u2014 ' + credit) : null));
}
Object.assign(__ds_scope, { Caption });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/editorial/Caption.jsx", error: String((e && e.message) || e) }); }

// components/editorial/ImageFrame.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function ImageFrame({
  src,
  alt = '',
  ratio = '3 / 2',
  fit = 'cover',
  label = 'Image',
  caption,
  index,
  credit,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("figure", _extends({
    style: {
      margin: 0,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      aspectRatio: ratio,
      width: '100%',
      overflow: 'hidden',
      background: src ? 'var(--paper-200)' : 'var(--surface-tint)',
      borderRadius: 'var(--radius-none)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: alt,
    style: {
      width: '100%',
      height: '100%',
      objectFit: fit
    }
  }) : /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--text-3xs)',
      letterSpacing: 'var(--tracking-caps-wide)',
      textTransform: 'uppercase',
      color: 'var(--tint-200)'
    }
  }, label)), caption || index || credit ? /*#__PURE__*/React.createElement("figcaption", {
    style: {
      display: 'flex',
      gap: 'var(--s-3)',
      alignItems: 'baseline',
      fontSize: 'var(--type-caption-size)',
      color: 'var(--text-secondary)',
      paddingTop: 'var(--s-1)'
    }
  }, index ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--text-3xs)',
      letterSpacing: 'var(--tracking-caps)',
      color: 'var(--text-muted)'
    }
  }, index) : null, /*#__PURE__*/React.createElement("span", null, caption, credit ? /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-muted)'
    }
  }, ' \u2014 ' + credit) : null)) : null);
}
Object.assign(__ds_scope, { ImageFrame });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/editorial/ImageFrame.jsx", error: String((e && e.message) || e) }); }

// components/editorial/MetaList.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function MetaList({
  items = [],
  columns = 1,
  dense = false,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("dl", _extends({
    style: {
      margin: 0,
      display: 'grid',
      gridTemplateColumns: 'repeat(' + columns + ',minmax(0,1fr))',
      columnGap: 'var(--s-6)',
      rowGap: 0,
      ...style
    }
  }, rest), items.map((it, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'grid',
      gridTemplateColumns: 'minmax(96px,.55fr) minmax(0,1fr)',
      gap: 'var(--s-4)',
      alignItems: 'baseline',
      padding: (dense ? 'var(--s-1)' : 'var(--s-2)') + ' 0',
      borderTop: 'var(--hairline) solid var(--border-hairline)'
    }
  }, /*#__PURE__*/React.createElement("dt", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--text-3xs)',
      letterSpacing: 'var(--tracking-caps)',
      textTransform: 'uppercase',
      color: 'var(--text-muted)'
    }
  }, it.label), /*#__PURE__*/React.createElement("dd", {
    style: {
      margin: 0,
      fontSize: dense ? 'var(--text-sm)' : 'var(--text-base)',
      color: 'var(--text-primary)'
    }
  }, it.value))));
}
Object.assign(__ds_scope, { MetaList });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/editorial/MetaList.jsx", error: String((e && e.message) || e) }); }

// components/editorial/SectionHeading.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function SectionHeading({
  children,
  number,
  rule = true,
  level = 'h2',
  size = 'md',
  style,
  ...rest
}) {
  const Tag = level;
  const sizes = {
    sm: 'var(--text-md)',
    md: 'var(--text-lg)',
    lg: 'var(--text-xl)'
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      gap: 'var(--s-4)',
      alignItems: 'baseline',
      borderTop: rule ? 'var(--hairline) solid var(--border-strong)' : 'none',
      paddingTop: rule ? 'var(--s-2)' : 0,
      ...style
    }
  }, rest), number ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--text-2xs)',
      letterSpacing: 'var(--tracking-caps)',
      color: 'var(--text-muted)'
    }
  }, number) : null, /*#__PURE__*/React.createElement(Tag, {
    style: {
      fontSize: sizes[size],
      fontWeight: 'var(--weight-medium)',
      letterSpacing: 'var(--tracking-tight)',
      margin: 0
    }
  }, children));
}
Object.assign(__ds_scope, { SectionHeading });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/editorial/SectionHeading.jsx", error: String((e && e.message) || e) }); }

// components/editorial/Wordmark.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const mkWordmarkSizes = {
  sm: {
    size: 'var(--text-sm)',
    sub: 'var(--text-xs)',
    lead: '0px',
    indent: '0px'
  },
  md: {
    size: 'var(--text-lg)',
    sub: 'var(--text-md)',
    lead: '0px',
    indent: '0.5px'
  },
  lg: {
    size: 'var(--text-2xl)',
    sub: 'var(--text-lg)',
    lead: 'var(--s-1)',
    indent: '2px'
  },
  xl: {
    size: 'var(--text-3xl)',
    sub: 'var(--text-xl)',
    lead: 'var(--s-1)',
    indent: '3px'
  }
};
function Wordmark({
  size = 'md',
  layout = 'stacked',
  tone = 'ink',
  onClick,
  style,
  ...rest
}) {
  const s = mkWordmarkSizes[size];
  const color = tone === 'inverse' ? 'var(--text-inverse)' : 'var(--text-primary)';
  return /*#__PURE__*/React.createElement("span", _extends({
    onClick: onClick,
    style: {
      display: 'inline-flex',
      flexDirection: layout === 'stacked' ? 'column' : 'row',
      gap: layout === 'stacked' ? 0 : '0.5em',
      alignItems: layout === 'stacked' ? 'flex-start' : 'baseline',
      fontFamily: 'var(--font-sans)',
      fontSize: s.size,
      fontWeight: 'var(--weight-medium)',
      lineHeight: 'var(--leading-tight)',
      letterSpacing: 'var(--tracking-display)',
      textTransform: 'lowercase',
      color,
      cursor: onClick ? 'pointer' : 'inherit',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", null, "Maxime Kreiter."), /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 'var(--weight-regular)',
      letterSpacing: 'var(--tracking-tight)',
      fontSize: s.sub,
      marginLeft: layout === 'stacked' ? s.indent : 0,
      color: tone === 'inverse' ? 'var(--paper-200)' : 'var(--text-secondary)',
      paddingTop: layout === 'stacked' ? s.lead : 0
    }
  }, "Architecte"));
}
Object.assign(__ds_scope, { Wordmark });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/editorial/Wordmark.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Dialog.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Dialog({
  open = false,
  title,
  children,
  footer,
  onClose,
  width = 520,
  style,
  ...rest
}) {
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    role: "dialog",
    "aria-modal": "true",
    style: {
      position: 'fixed',
      inset: 0,
      zIndex: 50,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'rgba(17,17,16,.28)',
      backdropFilter: 'blur(2px)',
      padding: 'var(--s-5)'
    },
    onClick: onClose
  }, /*#__PURE__*/React.createElement("div", _extends({
    onClick: e => e.stopPropagation(),
    style: {
      width: '100%',
      maxWidth: width,
      background: 'var(--surface-raised)',
      border: 'var(--hairline) solid var(--border-strong)',
      borderRadius: 'var(--radius-none)',
      boxShadow: 'var(--shadow-overlay)',
      padding: 'var(--s-6)',
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--s-5)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'space-between',
      gap: 'var(--s-4)'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontSize: 'var(--text-md)',
      fontWeight: 'var(--weight-medium)',
      letterSpacing: 'var(--tracking-tight)'
    }
  }, title), onClose ? /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    glyph: '\u00D7',
    label: "Fermer",
    size: "sm",
    onClick: onClose,
    style: {
      marginTop: -4,
      marginRight: -6
    }
  }) : null), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--text-base)',
      lineHeight: 'var(--leading-body)',
      color: 'var(--text-meta)'
    }
  }, children), footer ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--s-3)',
      justifyContent: 'flex-end'
    }
  }, footer) : null));
}
Object.assign(__ds_scope, { Dialog });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Dialog.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Toast.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Toast({
  open = true,
  children,
  tone = 'neutral',
  onDismiss,
  style,
  ...rest
}) {
  if (!open) return null;
  const rail = {
    neutral: 'var(--ink-900)',
    positive: 'var(--positive-600)',
    critical: 'var(--critical-600)'
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "status",
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 'var(--s-4)',
      background: 'var(--surface-inverse)',
      color: 'var(--text-inverse)',
      borderRadius: 'var(--radius-none)',
      padding: '10px var(--s-4)',
      borderTop: 'var(--rule-weight-strong) solid ' + rail[tone],
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--text-2xs)',
      letterSpacing: 'var(--tracking-caps)',
      textTransform: 'uppercase',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", null, children), onDismiss ? /*#__PURE__*/React.createElement("button", {
    onClick: onDismiss,
    "aria-label": "Fermer",
    style: {
      background: 'none',
      border: 'none',
      color: 'var(--paper-200)',
      cursor: 'pointer',
      padding: 0,
      fontSize: 14,
      lineHeight: 1
    }
  }, '\u00D7') : null);
}
Object.assign(__ds_scope, { Toast });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Toast.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Tooltip.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Tooltip({
  label,
  children,
  placement = 'top',
  style,
  ...rest
}) {
  const [open, setOpen] = React.useState(false);
  const pos = {
    top: {
      bottom: '100%',
      left: 0,
      marginBottom: 6
    },
    bottom: {
      top: '100%',
      left: 0,
      marginTop: 6
    },
    right: {
      left: '100%',
      top: 0,
      marginLeft: 6
    }
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      position: 'relative',
      display: 'inline-flex',
      ...style
    },
    onMouseEnter: () => setOpen(true),
    onMouseLeave: () => setOpen(false),
    onFocus: () => setOpen(true),
    onBlur: () => setOpen(false)
  }, rest), children, /*#__PURE__*/React.createElement("span", {
    role: "tooltip",
    style: {
      position: 'absolute',
      ...pos[placement],
      zIndex: 20,
      opacity: open ? 1 : 0,
      pointerEvents: 'none',
      transition: 'var(--transition-opacity)',
      background: 'var(--surface-inverse)',
      color: 'var(--text-inverse)',
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--text-3xs)',
      letterSpacing: 'var(--tracking-caps)',
      textTransform: 'uppercase',
      padding: '4px 7px',
      whiteSpace: 'nowrap',
      borderRadius: 'var(--radius-none)'
    }
  }, label));
}
Object.assign(__ds_scope, { Tooltip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Tooltip.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Checkbox({
  label,
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
      gap: 'var(--s-3)',
      cursor: disabled ? 'default' : 'pointer',
      opacity: disabled ? 'var(--disabled-opacity)' : 1,
      fontSize: 'var(--text-base)',
      color: 'var(--text-primary)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "checkbox",
    checked: on,
    disabled: disabled,
    onChange: e => {
      if (!controlled) setInner(e.target.checked);
      if (onChange) onChange(e);
    },
    style: {
      position: 'absolute',
      opacity: 0,
      width: 1,
      height: 1
    }
  }, rest)), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      width: 14,
      height: 14,
      flex: '0 0 auto',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      border: 'var(--hairline) solid ' + (on ? 'var(--ink-900)' : 'var(--border-mid)'),
      background: on ? 'var(--ink-900)' : 'transparent',
      color: 'var(--text-inverse)',
      fontSize: 10,
      lineHeight: 1,
      borderRadius: 'var(--radius-none)',
      transition: 'var(--transition-color)'
    }
  }, on ? '\u00D7' : ''), label);
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Field.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Field({
  label,
  hint,
  error,
  required = false,
  htmlFor,
  children,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--s-1)',
      ...style
    }
  }, rest), label ? /*#__PURE__*/React.createElement("label", {
    htmlFor: htmlFor,
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--type-label-size)',
      letterSpacing: 'var(--tracking-caps)',
      textTransform: 'uppercase',
      color: 'var(--text-secondary)'
    }
  }, label, required ? /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      color: 'var(--critical-600)'
    }
  }, " *") : null) : null, children, error ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-xs)',
      color: 'var(--critical-600)'
    }
  }, error) : hint ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-xs)',
      color: 'var(--text-muted)'
    }
  }, hint) : null);
}
Object.assign(__ds_scope, { Field });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Field.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Input({
  invalid = false,
  disabled = false,
  boxed = false,
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const line = invalid ? 'var(--critical-600)' : focus ? 'var(--border-strong)' : 'var(--border-mid)';
  return /*#__PURE__*/React.createElement("input", _extends({
    disabled: disabled,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      height: 'var(--control-h-md)',
      width: '100%',
      background: 'transparent',
      color: 'var(--text-primary)',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-base)',
      borderRadius: 'var(--radius-none)',
      border: boxed ? 'var(--hairline) solid ' + line : 'none',
      borderBottom: 'var(--hairline) solid ' + line,
      padding: boxed ? '0 12px' : '0 0 2px',
      outline: 'none',
      opacity: disabled ? 'var(--disabled-opacity)' : 1,
      transition: 'var(--transition-color)',
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Radio.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Radio({
  label,
  checked,
  name,
  value,
  disabled = false,
  onChange,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 'var(--s-3)',
      cursor: disabled ? 'default' : 'pointer',
      opacity: disabled ? 'var(--disabled-opacity)' : 1,
      fontSize: 'var(--text-base)',
      color: 'var(--text-primary)',
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
      width: 1,
      height: 1
    }
  }, rest)), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      width: 14,
      height: 14,
      flex: '0 0 auto',
      borderRadius: 'var(--radius-pill)',
      border: 'var(--hairline) solid ' + (checked ? 'var(--ink-900)' : 'var(--border-mid)'),
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      transition: 'var(--transition-color)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: 'var(--radius-pill)',
      background: checked ? 'var(--ink-900)' : 'transparent'
    }
  })), label);
}
Object.assign(__ds_scope, { Radio });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Radio.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Select({
  options = [],
  invalid = false,
  disabled = false,
  boxed = false,
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const line = invalid ? 'var(--critical-600)' : focus ? 'var(--border-strong)' : 'var(--border-mid)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      width: '100%'
    }
  }, /*#__PURE__*/React.createElement("select", _extends({
    disabled: disabled,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      appearance: 'none',
      WebkitAppearance: 'none',
      height: 'var(--control-h-md)',
      width: '100%',
      background: 'transparent',
      color: 'var(--text-primary)',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-base)',
      borderRadius: 'var(--radius-none)',
      border: boxed ? 'var(--hairline) solid ' + line : 'none',
      borderBottom: 'var(--hairline) solid ' + line,
      padding: boxed ? '0 28px 0 12px' : '0 22px 2px 0',
      outline: 'none',
      opacity: disabled ? 'var(--disabled-opacity)' : 1,
      transition: 'var(--transition-color)',
      ...style
    }
  }, rest), options.map(o => /*#__PURE__*/React.createElement("option", {
    key: typeof o === 'string' ? o : o.value,
    value: typeof o === 'string' ? o : o.value
  }, typeof o === 'string' ? o : o.label))), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      right: boxed ? 10 : 2,
      top: '50%',
      transform: 'translateY(-60%)',
      pointerEvents: 'none',
      color: 'var(--text-secondary)',
      fontSize: 12
    }
  }, '\u2193'));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Switch({
  label,
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
      gap: 'var(--s-3)',
      cursor: disabled ? 'default' : 'pointer',
      opacity: disabled ? 'var(--disabled-opacity)' : 1,
      fontSize: 'var(--text-base)',
      color: 'var(--text-primary)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "checkbox",
    role: "switch",
    checked: on,
    disabled: disabled,
    onChange: e => {
      if (!controlled) setInner(e.target.checked);
      if (onChange) onChange(e);
    },
    style: {
      position: 'absolute',
      opacity: 0,
      width: 1,
      height: 1
    }
  }, rest)), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      width: 34,
      height: 16,
      flex: '0 0 auto',
      position: 'relative',
      border: 'var(--hairline) solid ' + (on ? 'var(--ink-900)' : 'var(--border-mid)'),
      background: 'transparent',
      borderRadius: 'var(--radius-none)',
      transition: 'var(--transition-color)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 1,
      bottom: 1,
      width: 14,
      left: on ? 'calc(100% - 15px)' : 1,
      background: on ? 'var(--ink-900)' : 'var(--border-mid)',
      transition: 'left var(--dur-fast) var(--ease-out), background-color var(--dur-fast) var(--ease-out)'
    }
  })), label);
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/forms/Textarea.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Textarea({
  invalid = false,
  disabled = false,
  rows = 4,
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const line = invalid ? 'var(--critical-600)' : focus ? 'var(--border-strong)' : 'var(--border-mid)';
  return /*#__PURE__*/React.createElement("textarea", _extends({
    rows: rows,
    disabled: disabled,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      width: '100%',
      background: 'transparent',
      color: 'var(--text-primary)',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-base)',
      lineHeight: 'var(--leading-body)',
      borderRadius: 'var(--radius-none)',
      border: 'var(--hairline) solid ' + line,
      padding: '10px 12px',
      outline: 'none',
      resize: 'vertical',
      opacity: disabled ? 'var(--disabled-opacity)' : 1,
      transition: 'var(--transition-color)',
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { Textarea });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Textarea.jsx", error: String((e && e.message) || e) }); }

// components/navigation/IndexRow.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function IndexRow({
  number,
  title,
  place,
  year,
  meta,
  href,
  onClick,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const Tag = href ? 'a' : 'div';
  return /*#__PURE__*/React.createElement(Tag, _extends({
    href: href,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: 'grid',
      gridTemplateColumns: '48px minmax(0,1fr) minmax(0,.8fr) 64px',
      gap: 'var(--s-4)',
      alignItems: 'baseline',
      padding: 'var(--s-3) 0',
      borderBottom: 'var(--hairline) solid var(--border-hairline)',
      textDecoration: 'none',
      color: 'var(--text-primary)',
      cursor: href || onClick ? 'pointer' : 'default',
      background: hover && (href || onClick) ? 'var(--paper-050)' : 'transparent',
      transition: 'var(--transition-color)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--text-2xs)',
      color: 'var(--text-muted)'
    }
  }, number), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-md)',
      letterSpacing: 'var(--tracking-tight)'
    }
  }, title), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-sm)',
      color: 'var(--text-secondary)'
    }
  }, meta || place), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--text-2xs)',
      color: 'var(--text-secondary)',
      textAlign: 'right'
    }
  }, year));
}
Object.assign(__ds_scope, { IndexRow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/IndexRow.jsx", error: String((e && e.message) || e) }); }

// components/navigation/SiteFooter.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function SiteFooter({
  columns = [],
  note,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("footer", _extends({
    style: {
      borderTop: 'var(--hairline) solid var(--border-hairline)',
      padding: 'var(--s-7) var(--page-margin) var(--s-6)',
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--s-7)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit,minmax(160px,1fr))',
      gap: 'var(--s-6)'
    }
  }, columns.map(c => /*#__PURE__*/React.createElement("div", {
    key: c.title,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--s-2)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--text-3xs)',
      letterSpacing: 'var(--tracking-caps)',
      textTransform: 'uppercase',
      color: 'var(--text-muted)'
    }
  }, c.title), c.lines.map((l, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      fontSize: 'var(--text-sm)',
      color: 'var(--text-meta)'
    }
  }, l))))), note ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--text-3xs)',
      letterSpacing: 'var(--tracking-caps)',
      textTransform: 'uppercase',
      color: 'var(--text-muted)'
    }
  }, note) : null);
}
Object.assign(__ds_scope, { SiteFooter });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/SiteFooter.jsx", error: String((e && e.message) || e) }); }

// components/navigation/SiteHeader.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function SiteHeader({
  items = [],
  active,
  onNavigate,
  lang = 'FR',
  onLang,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("header", _extends({
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 'var(--s-6)',
      height: 'var(--header-height)',
      padding: '0 var(--page-margin)',
      borderBottom: 'var(--hairline) solid var(--border-hairline)',
      background: 'var(--surface-page)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement(__ds_scope.Wordmark, {
    size: "sm",
    onClick: () => onNavigate && onNavigate('index')
  }), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      gap: 'var(--s-6)',
      alignItems: 'center'
    }
  }, items.map(it => {
    const v = it.value || it;
    const label = it.label || it;
    const on = v === active;
    return /*#__PURE__*/React.createElement("button", {
      key: v,
      onClick: () => onNavigate && onNavigate(v),
      style: {
        background: 'none',
        border: 'none',
        padding: 0,
        cursor: 'pointer',
        fontFamily: 'var(--font-mono)',
        fontSize: 'var(--text-2xs)',
        letterSpacing: 'var(--tracking-caps)',
        textTransform: 'uppercase',
        color: on ? 'var(--text-primary)' : 'var(--text-muted)',
        borderBottom: 'var(--hairline) solid ' + (on ? 'var(--ink-900)' : 'transparent'),
        transition: 'var(--transition-color)'
      }
    }, label);
  }), /*#__PURE__*/React.createElement("button", {
    onClick: onLang,
    style: {
      background: 'none',
      border: 'var(--hairline) solid var(--border-mid)',
      cursor: 'pointer',
      width: 30,
      height: 20,
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--text-3xs)',
      letterSpacing: 'var(--tracking-caps)',
      color: 'var(--text-secondary)'
    }
  }, lang)));
}
Object.assign(__ds_scope, { SiteHeader });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/SiteHeader.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Tabs({
  items = [],
  value,
  onChange,
  align = 'start',
  style,
  ...rest
}) {
  const active = value !== undefined ? value : items[0] && (items[0].value || items[0]);
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "tablist",
    style: {
      display: 'flex',
      gap: 'var(--s-6)',
      alignItems: 'baseline',
      justifyContent: align === 'end' ? 'flex-end' : align === 'center' ? 'center' : 'flex-start',
      borderBottom: 'var(--hairline) solid var(--border-hairline)',
      ...style
    }
  }, rest), items.map(it => {
    const v = it.value || it;
    const label = it.label || it;
    const on = v === active;
    return /*#__PURE__*/React.createElement("button", {
      key: v,
      role: "tab",
      "aria-selected": on,
      onClick: () => onChange && onChange(v),
      style: {
        background: 'none',
        border: 'none',
        padding: '0 0 7px',
        cursor: 'pointer',
        fontFamily: 'var(--font-mono)',
        fontSize: 'var(--text-2xs)',
        letterSpacing: 'var(--tracking-caps)',
        textTransform: 'uppercase',
        color: on ? 'var(--text-primary)' : 'var(--text-muted)',
        boxShadow: on ? 'inset 0 -1px 0 0 var(--ink-900)' : 'none',
        transition: 'var(--transition-color)'
      }
    }, label);
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// ui_kits/documents/CoverSheet.jsx
try { (() => {
const {
  Wordmark
} = window.MaximeKreiterArchitecteDesignSystem_afada3;
function CoverSheet() {
  return /*#__PURE__*/React.createElement(window.Sheet, {
    tint: true
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'flex-end'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      border: 'var(--hairline) solid var(--ink-900)',
      padding: '8px 12px',
      display: 'flex',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 2,
      background: 'var(--ink-900)',
      flex: '0 0 auto'
    }
  }), /*#__PURE__*/React.createElement("span", {
    className: "mk-meta",
    style: {
      fontSize: 'var(--text-3xs)',
      lineHeight: 1.7,
      textTransform: 'uppercase'
    }
  }, "47 rue de la Fontaine au Roi", /*#__PURE__*/React.createElement("br", null), "75011 Paris \u2014 France"))), /*#__PURE__*/React.createElement("div", {
    style: {
      margin: 'auto 0',
      paddingTop: 120
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 68,
      fontWeight: 'var(--weight-medium)',
      letterSpacing: 'var(--tracking-display)',
      lineHeight: 0.98,
      textTransform: 'uppercase',
      maxWidth: 520
    }
  }, "4 rue", /*#__PURE__*/React.createElement("br", null), "Deguerry"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 28,
      alignItems: 'baseline',
      paddingTop: 26
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "mk-meta",
    style: {
      fontSize: 'var(--text-xs)'
    }
  }, "Paris XI"), /*#__PURE__*/React.createElement("span", {
    className: "mk-meta",
    style: {
      fontSize: 'var(--text-xs)',
      color: 'var(--ink-700)'
    }
  }, "R\xE9habilitation \u2014 4 logements"), /*#__PURE__*/React.createElement("span", {
    className: "mk-meta",
    style: {
      fontSize: 'var(--text-xs)',
      color: 'var(--ink-700)'
    }
  }, "2025"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-end',
      marginTop: 'auto'
    }
  }, /*#__PURE__*/React.createElement(Wordmark, {
    size: "sm",
    layout: "stacked"
  }), /*#__PURE__*/React.createElement("span", {
    className: "mk-meta",
    style: {
      fontSize: 'var(--text-3xs)',
      color: 'var(--ink-700)'
    }
  }, "Dossier de projet \u2014 05.2026")));
}
Object.assign(window, {
  CoverSheet
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/documents/CoverSheet.jsx", error: String((e && e.message) || e) }); }

// ui_kits/documents/NoteSheet.jsx
try { (() => {
const {
  MetaList,
  SectionHeading,
  Checkbox,
  Badge
} = window.MaximeKreiterArchitecteDesignSystem_afada3;
function NoteSheet() {
  return /*#__PURE__*/React.createElement(window.Sheet, null, /*#__PURE__*/React.createElement(window.SheetHeader, {
    left: "Compte rendu de chantier",
    right: "Halle Sainte-Marthe \u2014 CR N\xB014"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      paddingTop: 32,
      display: 'grid',
      gridTemplateColumns: 'minmax(0,1fr) 220px',
      gap: 40
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 26
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 'var(--text-lg)',
      fontWeight: 'var(--weight-medium)',
      letterSpacing: 'var(--tracking-tight)'
    }
  }, "Visite du 14 mai 2026"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--text-sm)',
      color: 'var(--text-secondary)',
      paddingTop: 6
    }
  }, "Pr\xE9sents : MOA (Ville de Nancy), MOE, BET structure, entreprise gros \u0153uvre.")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SectionHeading, {
    number: "01",
    size: "sm"
  }, "Avancement"), /*#__PURE__*/React.createElement("div", {
    style: {
      paddingTop: 12,
      display: 'flex',
      flexDirection: 'column'
    }
  }, [['Terrassement', 'Achevé', 'positive'], ['Reprise de charpente', 'En cours — 60 %', 'warning'], ['Bardage polycarbonate', 'Non démarré', 'neutral'], ['Réseaux enterrés', 'Achevé', 'positive']].map(([t, s, tone]) => /*#__PURE__*/React.createElement("div", {
    key: t,
    style: {
      display: 'grid',
      gridTemplateColumns: 'minmax(0,1fr) 180px',
      gap: 16,
      alignItems: 'baseline',
      padding: '7px 0',
      borderTop: 'var(--hairline) solid var(--border-hairline)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-base)'
    }
  }, t), /*#__PURE__*/React.createElement(Badge, {
    tone: tone
  }, s))))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SectionHeading, {
    number: "02",
    size: "sm"
  }, "Observations"), /*#__PURE__*/React.createElement("ol", {
    style: {
      margin: 0,
      padding: 0,
      listStyle: 'none',
      paddingTop: 12
    }
  }, ['La panne faîtière côté est présente une flèche supérieure au relevé. Le BET structure transmet une note de calcul avant le 20.05.', 'Les échantillons de polycarbonate sont attendus sur site pour la prochaine visite.', 'La réservation du local technique doit être reprise : 15 cm manquants en largeur.', 'Le planning reste tenu. Prochaine visite le 28 mai 2026, 9 h 30.'].map((t, i) => /*#__PURE__*/React.createElement("li", {
    key: i,
    style: {
      display: 'grid',
      gridTemplateColumns: '32px minmax(0,1fr)',
      gap: 12,
      padding: '7px 0',
      borderTop: 'var(--hairline) solid var(--border-hairline)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "mk-meta",
    style: {
      fontSize: 'var(--text-3xs)',
      color: 'var(--text-muted)'
    }
  }, '0' + (i + 1)), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-base)',
      lineHeight: 'var(--leading-body)',
      color: 'var(--text-meta)'
    }
  }, t))))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SectionHeading, {
    number: "03",
    size: "sm"
  }, "Actions"), /*#__PURE__*/React.createElement("div", {
    style: {
      paddingTop: 14,
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(Checkbox, {
    label: "Note de calcul panne fa\xEEti\xE8re \u2014 BET structure, 20.05"
  }), /*#__PURE__*/React.createElement(Checkbox, {
    label: "\xC9chantillons bardage \u2014 entreprise, 28.05",
    defaultChecked: true
  }), /*#__PURE__*/React.createElement(Checkbox, {
    label: "Plan de r\xE9servation modifi\xE9 \u2014 MOE, 22.05"
  })))), /*#__PURE__*/React.createElement("aside", null, /*#__PURE__*/React.createElement("span", {
    className: "mk-meta",
    style: {
      fontSize: 'var(--text-3xs)',
      color: 'var(--text-muted)'
    }
  }, "R\xE9f\xE9rences"), /*#__PURE__*/React.createElement(MetaList, {
    dense: true,
    style: {
      paddingTop: 10
    },
    items: [{
      label: 'Opération',
      value: 'Halle Sainte-Marthe'
    }, {
      label: 'Phase',
      value: 'Chantier — DET'
    }, {
      label: 'CR N°',
      value: '14'
    }, {
      label: 'Date',
      value: '14.05.2026'
    }, {
      label: 'Rédacteur',
      value: 'M. Kreiter'
    }, {
      label: 'Diffusion',
      value: 'MOA, BET, entreprise'
    }]
  }))), /*#__PURE__*/React.createElement(window.SheetFooter, {
    left: "Compte rendu N\xB014 \u2014 14.05.2026",
    page: "1 / 2"
  }));
}
Object.assign(window, {
  NoteSheet
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/documents/NoteSheet.jsx", error: String((e && e.message) || e) }); }

// ui_kits/documents/ProjectSheet.jsx
try { (() => {
const {
  MetaList,
  ImageFrame,
  SectionHeading,
  Caption,
  Badge
} = window.MaximeKreiterArchitecteDesignSystem_afada3;
function ProjectSheet() {
  const p = window.MK_PROJECTS[0];
  return /*#__PURE__*/React.createElement(window.Sheet, null, /*#__PURE__*/React.createElement(window.SheetHeader, {
    left: "Maxime Kreiter Architecte",
    right: '01 — ' + p.title
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'minmax(0,1fr) 220px',
      gap: 40,
      paddingTop: 32
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 24
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 16,
      alignItems: 'center',
      paddingBottom: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "mk-meta",
    style: {
      color: 'var(--text-muted)'
    }
  }, p.number), /*#__PURE__*/React.createElement(Badge, {
    tone: "positive"
  }, p.status)), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 'var(--text-xl)',
      fontWeight: 'var(--weight-medium)',
      letterSpacing: 'var(--tracking-display)',
      textTransform: 'uppercase',
      lineHeight: 'var(--leading-tight)'
    }
  }, p.title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--type-lede-size)',
      lineHeight: 'var(--leading-snug)',
      paddingTop: 12,
      maxWidth: '44ch'
    }
  }, p.lede)), /*#__PURE__*/React.createElement(ImageFrame, {
    ratio: "3 / 2",
    label: p.images[0],
    index: "Fig. 01",
    caption: p.captions[0],
    credit: "Photo : \xE0 fournir"
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SectionHeading, {
    number: "01",
    size: "sm"
  }, "Intervention"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12,
      paddingTop: 14
    }
  }, p.body.map((t, i) => /*#__PURE__*/React.createElement("p", {
    key: i,
    style: {
      fontSize: 'var(--text-base)',
      lineHeight: 'var(--leading-body)',
      color: 'var(--text-meta)'
    }
  }, t)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 20
    }
  }, p.plans.slice(1, 3).map((pl, i) => /*#__PURE__*/React.createElement("figure", {
    key: pl,
    style: {
      margin: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      aspectRatio: '1 / 1',
      background: 'var(--surface-tint-soft)',
      border: 'var(--hairline) solid var(--tint-200)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "mk-meta",
    style: {
      fontSize: 'var(--text-3xs)',
      letterSpacing: 'var(--tracking-caps-wide)',
      color: 'var(--tint-200)'
    }
  }, pl)), /*#__PURE__*/React.createElement(Caption, {
    index: 'Pl. 0' + (i + 1)
  }, pl))))), /*#__PURE__*/React.createElement("aside", null, /*#__PURE__*/React.createElement("span", {
    className: "mk-meta",
    style: {
      fontSize: 'var(--text-3xs)',
      color: 'var(--text-muted)'
    }
  }, "Fiche technique"), /*#__PURE__*/React.createElement(MetaList, {
    dense: true,
    style: {
      paddingTop: 10
    },
    items: p.meta.map(([label, value]) => ({
      label,
      value
    }))
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      paddingTop: 28
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "mk-meta",
    style: {
      fontSize: 'var(--text-3xs)',
      color: 'var(--text-muted)'
    }
  }, "Intervenants"), /*#__PURE__*/React.createElement(MetaList, {
    dense: true,
    style: {
      paddingTop: 10
    },
    items: [{
      label: 'Architecte',
      value: 'Maxime Kreiter'
    }, {
      label: 'Structure',
      value: 'BET Lambert'
    }, {
      label: 'Fluides',
      value: 'BET Ourdel'
    }, {
      label: 'Entreprise',
      value: 'SNRB, lot unique'
    }]
  })))), /*#__PURE__*/React.createElement(window.SheetFooter, {
    left: "Dossier de projet \u2014 05.2026",
    page: "1 / 3"
  }));
}
Object.assign(window, {
  ProjectSheet
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/documents/ProjectSheet.jsx", error: String((e && e.message) || e) }); }

// ui_kits/documents/Sheet.jsx
try { (() => {
function Sheet({
  children,
  tint = false,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: 794,
      minHeight: 1123,
      flex: '0 0 auto',
      background: tint ? 'var(--surface-tint)' : 'var(--paper-000)',
      border: 'var(--hairline) solid var(--border-hairline)',
      padding: 64,
      display: 'flex',
      flexDirection: 'column',
      ...style
    }
  }, children);
}
function SheetHeader({
  left,
  right
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'baseline',
      paddingBottom: 7,
      borderBottom: '1px solid var(--ink-900)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "mk-meta",
    style: {
      fontSize: 'var(--text-3xs)'
    }
  }, left), /*#__PURE__*/React.createElement("span", {
    className: "mk-meta",
    style: {
      fontSize: 'var(--text-3xs)',
      color: 'var(--text-muted)'
    }
  }, right));
}
function SheetFooter({
  left,
  page
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'auto',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'baseline',
      paddingTop: 7,
      borderTop: 'var(--hairline) solid var(--border-hairline)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "mk-meta",
    style: {
      fontSize: 'var(--text-3xs)',
      color: 'var(--text-muted)'
    }
  }, left), /*#__PURE__*/React.createElement("span", {
    className: "mk-meta",
    style: {
      fontSize: 'var(--text-3xs)',
      color: 'var(--text-muted)'
    }
  }, page));
}
Object.assign(window, {
  Sheet,
  SheetHeader,
  SheetFooter
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/documents/Sheet.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/AgencyScreen.jsx
try { (() => {
const {
  SectionHeading,
  MetaList,
  ImageFrame,
  Wordmark
} = window.MaximeKreiterArchitecteDesignSystem_afada3;
function AgencyScreen() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'var(--s-8) var(--page-margin) var(--s-9)',
      display: 'grid',
      gridTemplateColumns: 'minmax(0,1.2fr) minmax(0,1fr)',
      gap: 'var(--s-8)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--s-7)'
    }
  }, /*#__PURE__*/React.createElement(Wordmark, {
    size: "lg",
    layout: "stacked"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--s-4)',
      maxWidth: 'var(--measure)'
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--type-lede-size)',
      lineHeight: 'var(--leading-snug)'
    }
  }, "L\u2019atelier travaille sur ce qui existe d\xE9j\xE0 : b\xE2timents \xE0 reprendre, structures \xE0 conserver, mati\xE8res disponibles \xE0 proximit\xE9 du chantier."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--text-base)',
      lineHeight: 'var(--leading-body)',
      color: 'var(--text-meta)'
    }
  }, "Fond\xE9 \xE0 Paris en 2016 apr\xE8s six ans pass\xE9s en agence \xE0 Bruxelles et \xE0 Lausanne. Les projets vont de l\u2019extension domestique \xE0 l\u2019\xE9quipement public, avec une pr\xE9f\xE9rence assum\xE9e pour les programmes contraints."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--text-base)',
      lineHeight: 'var(--leading-body)',
      color: 'var(--text-meta)'
    }
  }, "Chaque projet commence par un relev\xE9 et un inventaire : ce qui est en place, ce qui peut rester, ce qui doit partir. La construction en terre crue et en bois occupe une part croissante du travail.")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SectionHeading, {
    number: "01",
    size: "sm"
  }, "Atelier"), /*#__PURE__*/React.createElement(MetaList, {
    style: {
      paddingTop: 'var(--s-4)'
    },
    items: [{
      label: 'Fondation',
      value: '2016, Paris'
    }, {
      label: 'Effectif',
      value: '4 personnes'
    }, {
      label: 'Inscription',
      value: 'Ordre des architectes, Île-de-France'
    }, {
      label: 'Missions',
      value: 'Complète, base, concours'
    }]
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SectionHeading, {
    number: "02",
    size: "sm"
  }, "Distinctions"), /*#__PURE__*/React.createElement(MetaList, {
    style: {
      paddingTop: 'var(--s-4)'
    },
    items: [{
      label: '2026',
      value: 'Second prix — Tours Python, Paris Habitat'
    }, {
      label: '2024',
      value: 'Lauréat — Halle Sainte-Marthe, Ville de Nancy'
    }, {
      label: '2022',
      value: 'Mention — Prix de la construction en terre crue'
    }]
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--s-5)'
    }
  }, /*#__PURE__*/React.createElement(ImageFrame, {
    ratio: "4 / 5",
    label: "Portrait \u2014 atelier",
    caption: "L\u2019atelier, rue de la Fontaine au Roi",
    credit: "Photo : \xE0 fournir"
  }), /*#__PURE__*/React.createElement(ImageFrame, {
    ratio: "1 / 1",
    label: "Photo \u2014 maquettes",
    caption: "Maquettes de travail"
  })));
}
Object.assign(window, {
  AgencyScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/AgencyScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/App.jsx
try { (() => {
const {
  SiteHeader,
  SiteFooter
} = window.MaximeKreiterArchitecteDesignSystem_afada3;
function App() {
  const [route, setRoute] = React.useState({
    name: 'projets'
  });
  const [lang, setLang] = React.useState('FR');
  const go = name => setRoute({
    name
  });
  const open = id => setRoute({
    name: 'projet',
    id
  });
  return /*#__PURE__*/React.createElement("div", {
    style: {
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 30
    }
  }, /*#__PURE__*/React.createElement(SiteHeader, {
    items: [{
      value: 'projets',
      label: 'Projets'
    }, {
      value: 'agence',
      label: 'Agence'
    }, {
      value: 'contact',
      label: 'Contact'
    }],
    active: route.name === 'projet' ? 'projets' : route.name,
    onNavigate: go,
    lang: lang,
    onLang: () => setLang(l => l === 'FR' ? 'EN' : 'FR')
  })), /*#__PURE__*/React.createElement("main", {
    style: {
      flex: 1
    }
  }, route.name === 'projets' ? /*#__PURE__*/React.createElement(window.IndexScreen, {
    onOpen: open
  }) : null, route.name === 'projet' ? /*#__PURE__*/React.createElement(window.ProjectScreen, {
    id: route.id,
    onOpen: open,
    onBack: () => go('projets')
  }) : null, route.name === 'agence' ? /*#__PURE__*/React.createElement(window.AgencyScreen, null) : null, route.name === 'contact' ? /*#__PURE__*/React.createElement(window.ContactScreen, null) : null), /*#__PURE__*/React.createElement(SiteFooter, {
    columns: [{
      title: 'Atelier',
      lines: ['47 rue de la Fontaine au Roi', '75011 Paris']
    }, {
      title: 'Contact',
      lines: [/*#__PURE__*/React.createElement("a", {
        key: "m",
        href: "mailto:bonjour@kreiter.fr"
      }, "bonjour@kreiter.fr"), '+33 1 43 00 00 00']
    }, {
      title: 'Suivre',
      lines: [/*#__PURE__*/React.createElement("a", {
        key: "i",
        href: "#"
      }, "Instagram"), /*#__PURE__*/React.createElement("a", {
        key: "l",
        href: "#"
      }, "LinkedIn")]
    }, {
      title: 'Mentions',
      lines: ['SIRET 000 000 000 00000', 'Ordre des architectes IDF']
    }],
    note: "\xA9 2026 Maxime Kreiter Architecte \u2014 Tous droits r\xE9serv\xE9s"
  }));
}
Object.assign(window, {
  App
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/App.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/ContactScreen.jsx
try { (() => {
const {
  Field,
  Input,
  Textarea,
  Select,
  Checkbox,
  Button,
  SectionHeading,
  MetaList,
  Toast
} = window.MaximeKreiterArchitecteDesignSystem_afada3;
function ContactScreen() {
  const [sent, setSent] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'var(--s-8) var(--page-margin) var(--s-9)',
      display: 'grid',
      gridTemplateColumns: 'minmax(0,1fr) minmax(0,1fr)',
      gap: 'var(--s-8)'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SectionHeading, {
    number: "01",
    size: "md"
  }, "Atelier"), /*#__PURE__*/React.createElement(MetaList, {
    style: {
      paddingTop: 'var(--s-4)'
    },
    items: [{
      label: 'Adresse',
      value: /*#__PURE__*/React.createElement("span", null, "47 rue de la Fontaine au Roi", /*#__PURE__*/React.createElement("br", null), "75011 Paris")
    }, {
      label: 'Courriel',
      value: /*#__PURE__*/React.createElement("a", {
        href: "mailto:bonjour@kreiter.fr"
      }, "bonjour@kreiter.fr")
    }, {
      label: 'Téléphone',
      value: '+33 1 43 00 00 00'
    }, {
      label: 'Candidatures',
      value: 'CV et portfolio (10 Mo max.) par courriel'
    }]
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--text-sm)',
      color: 'var(--text-secondary)',
      paddingTop: 'var(--s-5)',
      maxWidth: 'var(--measure-narrow)'
    }
  }, "Les demandes de dossier de projet sont trait\xE9es sous 48 heures.")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SectionHeading, {
    number: "02",
    size: "md"
  }, "\xC9crire"), /*#__PURE__*/React.createElement("form", {
    onSubmit: e => {
      e.preventDefault();
      setSent(true);
    },
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--s-5)',
      paddingTop: 'var(--s-5)'
    }
  }, /*#__PURE__*/React.createElement(Field, {
    label: "Nom",
    htmlFor: "n",
    required: true
  }, /*#__PURE__*/React.createElement(Input, {
    id: "n",
    placeholder: "Nom et pr\xE9nom",
    required: true
  })), /*#__PURE__*/React.createElement(Field, {
    label: "Courriel",
    htmlFor: "m",
    required: true
  }, /*#__PURE__*/React.createElement(Input, {
    id: "m",
    type: "email",
    placeholder: "nom@domaine.fr",
    required: true
  })), /*#__PURE__*/React.createElement(Field, {
    label: "Objet",
    htmlFor: "o"
  }, /*#__PURE__*/React.createElement(Select, {
    id: "o",
    options: ['Demande de dossier', 'Nouveau projet', 'Candidature', 'Presse']
  })), /*#__PURE__*/React.createElement(Field, {
    label: "Message",
    htmlFor: "t"
  }, /*#__PURE__*/React.createElement(Textarea, {
    id: "t",
    rows: 5,
    placeholder: "Quelques lignes suffisent."
  })), /*#__PURE__*/React.createElement(Checkbox, {
    label: "Recevoir les publications de l\u2019atelier"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--s-3)',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "solid",
    type: "submit"
  }, "Envoyer"), sent ? /*#__PURE__*/React.createElement(Toast, {
    tone: "positive",
    onDismiss: () => setSent(false)
  }, "Message envoy\xE9") : null))));
}
Object.assign(window, {
  ContactScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/ContactScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/IndexScreen.jsx
try { (() => {
const {
  Tag,
  Switch,
  ImageFrame,
  IndexRow,
  Wordmark
} = window.MaximeKreiterArchitecteDesignSystem_afada3;
function IndexScreen({
  onOpen
}) {
  const [filter, setFilter] = React.useState('Tous');
  const [list, setList] = React.useState(false);
  const projects = window.MK_PROJECTS;
  const filters = ['Tous', 'Logement', 'Équipement', 'Rénovation'];
  const shown = filter === 'Tous' ? projects : projects.filter(p => p.programme === filter);
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("section", {
    style: {
      padding: 'var(--s-9) var(--page-margin) var(--s-8)',
      borderBottom: 'var(--hairline) solid var(--border-hairline)'
    }
  }, /*#__PURE__*/React.createElement(Wordmark, {
    size: "xl",
    layout: "stacked"
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      maxWidth: 'var(--measure)',
      fontSize: 'var(--type-lede-size)',
      lineHeight: 'var(--leading-snug)',
      paddingTop: 'var(--s-6)',
      color: 'var(--text-meta)'
    }
  }, "Atelier d\u2019architecture \xE9tabli \xE0 Paris. R\xE9habilitation, \xE9quipement public, construction en terre crue et en bois. Le travail porte sur ce qui existe d\xE9j\xE0 : structures conserv\xE9es, mati\xE8res locales, interventions mesur\xE9es.")), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: 'var(--s-6) var(--page-margin) var(--s-9)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      gap: 'var(--s-5)',
      flexWrap: 'wrap',
      paddingBottom: 'var(--s-6)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--s-2)',
      flexWrap: 'wrap'
    }
  }, filters.map(t => /*#__PURE__*/React.createElement(Tag, {
    key: t,
    active: filter === t,
    onClick: () => setFilter(t)
  }, t))), /*#__PURE__*/React.createElement(Switch, {
    label: "Vue liste",
    checked: list,
    onChange: e => setList(e.target.checked)
  })), list ? /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '48px minmax(0,1fr) minmax(0,.8fr) 64px',
      gap: 'var(--s-4)',
      paddingBottom: 'var(--s-2)'
    }
  }, ['Réf.', 'Projet', 'Lieu', 'Année'].map((h, i) => /*#__PURE__*/React.createElement("span", {
    key: h,
    className: "mk-meta",
    style: {
      fontSize: 'var(--text-3xs)',
      textAlign: i === 3 ? 'right' : 'left',
      color: 'var(--text-muted)'
    }
  }, h))), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid var(--ink-900)'
    }
  }, shown.map(p => /*#__PURE__*/React.createElement(IndexRow, {
    key: p.id,
    number: p.number,
    title: p.title,
    meta: p.place,
    year: p.year,
    onClick: () => onOpen(p.id)
  })))) : /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill,minmax(280px,1fr))',
      gap: 'var(--s-6) var(--grid-gap)'
    }
  }, shown.map(p => /*#__PURE__*/React.createElement("a", {
    key: p.id,
    href: "#",
    onClick: e => {
      e.preventDefault();
      onOpen(p.id);
    },
    style: {
      border: 'none',
      textDecoration: 'none',
      color: 'inherit'
    }
  }, /*#__PURE__*/React.createElement(ImageFrame, {
    ratio: "4 / 5",
    label: p.images[0]
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      gap: 'var(--s-4)',
      alignItems: 'baseline',
      paddingTop: 'var(--s-3)',
      borderTop: 'var(--hairline) solid var(--border-hairline)',
      marginTop: 'var(--s-3)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-base)'
    }
  }, p.title), /*#__PURE__*/React.createElement("span", {
    className: "mk-meta",
    style: {
      fontSize: 'var(--text-3xs)'
    }
  }, p.year)), /*#__PURE__*/React.createElement("div", {
    className: "mk-meta",
    style: {
      fontSize: 'var(--text-3xs)',
      color: 'var(--text-muted)',
      paddingTop: 2
    }
  }, p.place, " \xB7 ", p.programme))))));
}
Object.assign(window, {
  IndexScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/IndexScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/ProjectScreen.jsx
try { (() => {
const {
  Tabs,
  MetaList,
  ImageFrame,
  Caption,
  Badge,
  Button,
  IconButton,
  Tooltip,
  SectionHeading,
  Card
} = window.MaximeKreiterArchitecteDesignSystem_afada3;
function ProjectScreen({
  id,
  onOpen,
  onBack
}) {
  const projects = window.MK_PROJECTS;
  const i = Math.max(0, projects.findIndex(p => p.id === id));
  const p = projects[i];
  const next = projects[(i + 1) % projects.length];
  const [tab, setTab] = React.useState('Images');
  const [shot, setShot] = React.useState(0);
  React.useEffect(() => {
    setTab('Images');
    setShot(0);
  }, [id]);
  const tone = p.status === 'Livré' ? 'positive' : p.status === 'En chantier' ? 'warning' : 'neutral';
  return /*#__PURE__*/React.createElement("article", null, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement(ImageFrame, {
    ratio: "16 / 9",
    label: p.images[shot],
    style: {
      marginBottom: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      right: 'var(--s-4)',
      bottom: 'var(--s-4)',
      display: 'flex',
      gap: 'var(--s-2)'
    }
  }, /*#__PURE__*/React.createElement(Tooltip, {
    label: "Image pr\xE9c\xE9dente"
  }, /*#__PURE__*/React.createElement(IconButton, {
    glyph: '\u2190',
    label: "Image pr\xE9c\xE9dente",
    bordered: true,
    onClick: () => setShot(s => (s - 1 + p.images.length) % p.images.length),
    style: {
      background: 'var(--paper-100)'
    }
  })), /*#__PURE__*/React.createElement(Tooltip, {
    label: "Image suivante"
  }, /*#__PURE__*/React.createElement(IconButton, {
    glyph: '\u2192',
    label: "Image suivante",
    bordered: true,
    onClick: () => setShot(s => (s + 1) % p.images.length),
    style: {
      background: 'var(--paper-100)'
    }
  })))), /*#__PURE__*/React.createElement("header", {
    style: {
      padding: 'var(--s-6) var(--page-margin) var(--s-7)',
      display: 'grid',
      gridTemplateColumns: 'minmax(0,1.4fr) minmax(0,1fr)',
      gap: 'var(--s-8)',
      alignItems: 'end',
      borderBottom: 'var(--hairline) solid var(--border-hairline)'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--s-4)',
      alignItems: 'center',
      paddingBottom: 'var(--s-4)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "mk-meta",
    style: {
      color: 'var(--text-muted)'
    }
  }, p.number), /*#__PURE__*/React.createElement(Badge, {
    tone: tone
  }, p.status)), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 'var(--text-2xl)',
      fontWeight: 'var(--weight-medium)',
      letterSpacing: 'var(--tracking-display)',
      lineHeight: 'var(--leading-tight)',
      textTransform: 'uppercase'
    }
  }, p.title)), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--type-lede-size)',
      lineHeight: 'var(--leading-snug)',
      color: 'var(--text-meta)'
    }
  }, p.lede)), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'var(--s-6) var(--page-margin) var(--s-9)',
      display: 'grid',
      gridTemplateColumns: 'minmax(0,1.4fr) minmax(0,1fr)',
      gap: 'var(--s-8)'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Tabs, {
    items: ['Images', 'Plans', 'Fiche technique'],
    value: tab,
    onChange: setTab
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      paddingTop: 'var(--s-6)'
    }
  }, tab === 'Images' ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--s-7)'
    }
  }, p.images.map((im, n) => /*#__PURE__*/React.createElement(ImageFrame, {
    key: im,
    ratio: n % 3 === 0 ? '3 / 2' : '4 / 5',
    label: im,
    index: 'Fig. 0' + (n + 1),
    caption: p.captions[n],
    credit: "Photo : \xE0 fournir"
  }))) : tab === 'Plans' ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 'var(--s-6)'
    }
  }, p.plans.map((pl, n) => /*#__PURE__*/React.createElement("figure", {
    key: pl,
    style: {
      margin: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      aspectRatio: '1 / 1',
      background: 'var(--surface-tint-soft)',
      border: 'var(--hairline) solid var(--tint-200)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "mk-meta",
    style: {
      fontSize: 'var(--text-3xs)',
      letterSpacing: 'var(--tracking-caps-wide)',
      color: 'var(--tint-200)'
    }
  }, pl)), /*#__PURE__*/React.createElement(Caption, {
    index: 'Pl. 0' + (n + 1)
  }, pl)))) : /*#__PURE__*/React.createElement(MetaList, {
    items: p.meta.map(([label, value]) => ({
      label,
      value
    }))
  }))), /*#__PURE__*/React.createElement("aside", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--s-6)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--s-4)'
    }
  }, p.body.map((t, n) => /*#__PURE__*/React.createElement("p", {
    key: n,
    style: {
      fontSize: 'var(--text-base)',
      lineHeight: 'var(--leading-body)',
      color: 'var(--text-meta)'
    }
  }, t))), /*#__PURE__*/React.createElement(Card, {
    surface: "tint",
    bordered: false,
    padding: "md"
  }, /*#__PURE__*/React.createElement(MetaList, {
    dense: true,
    items: p.meta.slice(0, 4).map(([label, value]) => ({
      label,
      value
    }))
  })), /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    trailing: '\u2192',
    href: "#",
    onClick: e => {
      e.preventDefault();
      onBack();
    }
  }, "Retour \xE0 l\u2019index"))), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '0 var(--page-margin) var(--s-9)'
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    number: "\\u2192",
    size: "sm"
  }, "Projet suivant"), /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      onOpen(next.id);
    },
    style: {
      border: 'none',
      textDecoration: 'none',
      color: 'inherit',
      display: 'grid',
      gridTemplateColumns: 'minmax(0,1fr) minmax(0,2fr)',
      gap: 'var(--s-6)',
      paddingTop: 'var(--s-5)'
    }
  }, /*#__PURE__*/React.createElement(ImageFrame, {
    ratio: "3 / 2",
    label: next.images[0]
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 'var(--text-xl)',
      letterSpacing: 'var(--tracking-tight)'
    }
  }, next.title), /*#__PURE__*/React.createElement("div", {
    className: "mk-meta",
    style: {
      paddingTop: 'var(--s-2)',
      color: 'var(--text-muted)'
    }
  }, next.place, " \u2014 ", next.year)))));
}
Object.assign(window, {
  ProjectScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/ProjectScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/projects.js
try { (() => {
window.MK_PROJECTS = [{
  id: 'deguerry',
  number: '01',
  title: '4 rue Deguerry',
  place: 'Paris XI',
  year: '2025',
  programme: 'Logement',
  status: 'Livré',
  lede: 'Réhabilitation d\u2019un immeuble de faubourg en quatre logements traversants.',
  body: ['La parcelle, longue et étroite, ouvrait sur un passage aujourd\u2019hui fermé. Le projet rétablit cette traversée en dégageant le rez-de-chaussée et en reportant les circulations verticales contre le mur mitoyen.', 'La structure existante en pan de bois est conservée et laissée apparente dans les parties communes. Les planchers sont repris en solivage neuf, les percements sur cour alignés sur la trame d\u2019origine.'],
  meta: [['Maîtrise d\u2019ouvrage', 'Privée'], ['Lieu', '47 rue de la Fontaine au Roi, Paris XI'], ['Programme', 'Réhabilitation, 4 logements'], ['Surface', '412 m² SDP'], ['Coût', '1,15 M€ HT'], ['Mission', 'Complète'], ['Statut', 'Livré 2025']],
  images: ['Photo — façade rue', 'Photo — cour intérieure', 'Photo — cage d\u2019escalier', 'Photo — séjour R+2'],
  captions: ['Façade sur rue après travaux', 'Cour intérieure depuis le passage', 'Cage d\u2019escalier, pan de bois conservé', 'Séjour traversant au R+2'],
  plans: ['Plan de masse', 'Plan R+0', 'Plan R+1', 'Coupe AA']
}, {
  id: 'sainte-marthe',
  number: '02',
  title: 'Halle Sainte-Marthe',
  place: 'Nancy',
  year: '2024',
  programme: 'Équipement',
  status: 'En chantier',
  lede: 'Transformation d\u2019une halle métallique de 1928 en équipement de quartier.',
  body: ['La halle est vidée de ses adjonctions successives. Une boîte technique autonome est posée à l\u2019intérieur, laissant lire la charpente sur toute sa longueur.', 'Les façades pignons sont ouvertes ; les longs pans reçoivent un bardage en polycarbonate translucide qui restitue la lumière diffuse de la construction d\u2019origine.'],
  meta: [['Maîtrise d\u2019ouvrage', 'Ville de Nancy'], ['Lieu', 'Nancy, Meurthe-et-Moselle'], ['Programme', 'Équipement de quartier, 900 m²'], ['Surface', '900 m² SDP'], ['Coût', '2,4 M€ HT'], ['Mission', 'Base + OPC'], ['Statut', 'En chantier, livraison 2027']],
  images: ['Photo — halle existante', 'Photo — charpente', 'Photo — pignon ouvert'],
  captions: ['La halle avant intervention', 'Charpente métallique de 1928, conservée', 'Pignon est ouvert sur la place'],
  plans: ['Plan de masse', 'Plan niveau 0', 'Coupe longitudinale']
}, {
  id: 'presbytere',
  number: '03',
  title: 'Extension d\u2019un presbytère',
  place: 'Fénétrange, Moselle',
  year: '2023',
  programme: 'Rénovation',
  status: 'Livré',
  lede: 'Une annexe en pisé prolonge un presbytère du XVIIIᵉ siècle.',
  body: ['L\u2019extension est construite en pisé banché sur site, avec la terre extraite des fondations. Sa masse est posée en retrait du corps principal, séparée par un joint vitré.', 'Le programme est domestique : une cuisine, une pièce d\u2019eau, un atelier. Les baies sont peu nombreuses et profondes.'],
  meta: [['Maîtrise d\u2019ouvrage', 'Privée'], ['Lieu', 'Fénétrange, Moselle'], ['Programme', 'Extension, 84 m²'], ['Surface', '84 m² SDP'], ['Coût', '290 000 € HT'], ['Mission', 'Complète'], ['Statut', 'Livré 2023']],
  images: ['Photo — annexe depuis le jardin', 'Photo — joint vitré', 'Photo — atelier'],
  captions: ['L\u2019annexe en pisé depuis le jardin', 'Joint vitré entre annexe et corps principal', 'Atelier, mur de pisé laissé brut'],
  plans: ['Plan de masse', 'Plan R+0', 'Détail mur pisé']
}, {
  id: 'python',
  number: '04',
  title: 'Tours Python',
  place: 'Paris XX',
  year: '2026',
  programme: 'Logement',
  status: 'Concours',
  lede: 'Concours pour la surélévation de deux tours de logement social.',
  body: ['La proposition ajoute deux niveaux et une coursive extérieure continue, qui double les logements existants d\u2019un espace tampon.', 'La structure ajoutée est en bois, posée sur un chevêtre métallique reprenant les descentes de charges d\u2019origine.'],
  meta: [['Maîtrise d\u2019ouvrage', 'Paris Habitat'], ['Lieu', 'Paris XX'], ['Programme', 'Surélévation, 46 logements'], ['Surface', '3 200 m² SDP'], ['Coût', '6,8 M€ HT'], ['Mission', 'Concours'], ['Statut', 'Second prix']],
  images: ['Image — vue depuis la rue', 'Image — coursive', 'Image — axonométrie'],
  captions: ['Vue depuis la rue des Pyrénées', 'Coursive extérieure continue', 'Axonométrie de la structure ajoutée'],
  plans: ['Plan de masse', 'Plan étage courant', 'Coupe transversale']
}];
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/projects.js", error: String((e && e.message) || e) }); }

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Caption = __ds_scope.Caption;

__ds_ns.ImageFrame = __ds_scope.ImageFrame;

__ds_ns.MetaList = __ds_scope.MetaList;

__ds_ns.SectionHeading = __ds_scope.SectionHeading;

__ds_ns.Wordmark = __ds_scope.Wordmark;

__ds_ns.Dialog = __ds_scope.Dialog;

__ds_ns.Toast = __ds_scope.Toast;

__ds_ns.Tooltip = __ds_scope.Tooltip;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Field = __ds_scope.Field;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Textarea = __ds_scope.Textarea;

__ds_ns.IndexRow = __ds_scope.IndexRow;

__ds_ns.SiteFooter = __ds_scope.SiteFooter;

__ds_ns.SiteHeader = __ds_scope.SiteHeader;

__ds_ns.Tabs = __ds_scope.Tabs;

})();
