var N=null,E="",T="t",U="u",searchIndex={};
var R=["keycodes","An OEM specific key on Windows. This was used for…","An OEM specific key on Windows. This is (was?) used for…"];

searchIndex[R[0]]={"doc":E,"i":[[17,"KEY_CANCEL",R[0],"Cancel key.",N,N],[17,"KEY_HELP",E,"Help key.",N,N],[17,"KEY_BACK_SPACE",E,"Backspace key.",N,N],[17,"KEY_TAB",E,"Tab key.",N,N],[17,"KEY_CLEAR",E,"\"5\" key on Numpad when NumLock is unlocked. Or on Mac,…",N,N],[17,"KEY_RETURN",E,"Return/enter key on the main keyboard.",N,N],[17,"KEY_ENTER",E,E,N,N],[17,"KEY_SHIFT",E,"Shift key.",N,N],[17,"KEY_CONTROL",E,"Control key.",N,N],[17,"KEY_ALT",E,"Alt (Option on Mac) key.",N,N],[17,"KEY_PAUSE",E,"Pause key.",N,N],[17,"KEY_CAPS_LOCK",E,"Caps lock.",N,N],[17,"KEY_KANA",E,E,N,N],[17,"KEY_HANGUL",E,E,N,N],[17,"KEY_EISU",E,"\"英数\" key on Japanese Mac keyboard.",N,N],[17,"KEY_JUNJA",E,E,N,N],[17,"KEY_FINAL",E,E,N,N],[17,"KEY_HANJA",E,E,N,N],[17,"KEY_KANJI",E,E,N,N],[17,"KEY_ESCAPE",E,"Escape key.",N,N],[17,"KEY_CONVERT",E,E,N,N],[17,"KEY_NONCONVERT",E,E,N,N],[17,"KEY_ACCEPT",E,E,N,N],[17,"KEY_MODECHANGE",E,E,N,N],[17,"KEY_SPACE",E,"Space bar.",N,N],[17,"KEY_PAGE_UP",E,"Page Up key.",N,N],[17,"KEY_PAGE_DOWN",E,"Page Down key.",N,N],[17,"KEY_END",E,"End key.",N,N],[17,"KEY_HOME",E,"Home key.",N,N],[17,"KEY_LEFT",E,"Left arrow.",N,N],[17,"KEY_UP",E,"Up arrow.",N,N],[17,"KEY_RIGHT",E,"Right arrow.",N,N],[17,"KEY_DOWN",E,"Down arrow.",N,N],[17,"KEY_SELECT",E,E,N,N],[17,"KEY_PRINT",E,E,N,N],[17,"KEY_EXECUTE",E,E,N,N],[17,"KEY_PRINTSCREEN",E,"Print Screen key.",N,N],[17,"KEY_INSERT",E,"Ins(ert) key.",N,N],[17,"KEY_DELETE",E,"Del(ete) key.",N,N],[17,"KEY_0",E,"\"0\" key in standard key location.",N,N],[17,"KEY_1",E,"\"1\" key in standard key location.",N,N],[17,"KEY_2",E,"\"2\" key in standard key location.",N,N],[17,"KEY_3",E,"\"3\" key in standard key location.",N,N],[17,"KEY_4",E,"\"4\" key in standard key location.",N,N],[17,"KEY_5",E,"\"5\" key in standard key location.",N,N],[17,"KEY_6",E,"\"6\" key in standard key location.",N,N],[17,"KEY_7",E,"\"7\" key in standard key location.",N,N],[17,"KEY_8",E,"\"8\" key in standard key location.",N,N],[17,"KEY_9",E,"\"9\" key in standard key location.",N,N],[17,"KEY_COLON",E,"Colon (\":\") key.",N,N],[17,"KEY_SEMICOLON",E,"Semicolon (\";\") key.",N,N],[17,"KEY_LESS_THAN",E,"Less-than (\"<\") key.",N,N],[17,"KEY_EQUALS",E,"Equals (\"=\") key.",N,N],[17,"KEY_GREATER_THAN",E,"Greater-than (\">\") key.",N,N],[17,"KEY_QUESTION_MARK",E,"Question mark (\"?\") key.",N,N],[17,"KEY_AT",E,"Atmark (\"@\") key.",N,N],[17,"KEY_A",E,"\"A\" key.",N,N],[17,"KEY_B",E,"\"B\" key.",N,N],[17,"KEY_C",E,"\"C\" key.",N,N],[17,"KEY_D",E,"\"D\" key.",N,N],[17,"KEY_E",E,"\"E\" key.",N,N],[17,"KEY_F",E,"\"F\" key.",N,N],[17,"KEY_G",E,"\"G\" key.",N,N],[17,"KEY_H",E,"\"H\" key.",N,N],[17,"KEY_I",E,"\"I\" key.",N,N],[17,"KEY_J",E,"\"J\" key.",N,N],[17,"KEY_K",E,"\"K\" key.",N,N],[17,"KEY_L",E,"\"L\" key.",N,N],[17,"KEY_M",E,"\"M\" key.",N,N],[17,"KEY_N",E,"\"N\" key.",N,N],[17,"KEY_O",E,"\"O\" key.",N,N],[17,"KEY_P",E,"\"P\" key.",N,N],[17,"KEY_Q",E,"\"Q\" key.",N,N],[17,"KEY_R",E,"\"R\" key.",N,N],[17,"KEY_S",E,"\"S\" key.",N,N],[17,"KEY_T",E,"\"T\" key.",N,N],[17,"KEY_U",E,"\"U\" key.",N,N],[17,"KEY_V",E,"\"V\" key.",N,N],[17,"KEY_W",E,"\"W\" key.",N,N],[17,"KEY_X",E,"\"X\" key.",N,N],[17,"KEY_Y",E,"\"Y\" key.",N,N],[17,"KEY_Z",E,"\"Z\" key.",N,N],[17,"KEY_WIN",E,"Windows logo key on Windows. Or Super or Hyper key on Linux.",N,N],[17,"KEY_CONTEXT_MENU",E,"Opening context menu key.",N,N],[17,"KEY_SLEEP",E,E,N,N],[17,"KEY_NUMPAD0",E,"\"0\" on the numeric keypad.",N,N],[17,"KEY_NUMPAD1",E,"\"1\" on the numeric keypad.",N,N],[17,"KEY_NUMPAD2",E,"\"2\" on the numeric keypad.",N,N],[17,"KEY_NUMPAD3",E,"\"3\" on the numeric keypad.",N,N],[17,"KEY_NUMPAD4",E,"\"4\" on the numeric keypad.",N,N],[17,"KEY_NUMPAD5",E,"\"5\" on the numeric keypad.",N,N],[17,"KEY_NUMPAD6",E,"\"6\" on the numeric keypad.",N,N],[17,"KEY_NUMPAD7",E,"\"7\" on the numeric keypad.",N,N],[17,"KEY_NUMPAD8",E,"\"8\" on the numeric keypad.",N,N],[17,"KEY_NUMPAD9",E,"\"9\" on the numeric keypad.",N,N],[17,"KEY_MULTIPLY",E,"\"*\" on the numeric keypad.",N,N],[17,"KEY_ADD",E,"\"+\" on the numeric keypad.",N,N],[17,"KEY_SEPARATOR",E,E,N,N],[17,"KEY_SUBTRACT",E,"\"-\" on the numeric keypad.",N,N],[17,"KEY_DECIMAL",E,"Decimal point on the numeric keypad.",N,N],[17,"KEY_DIVIDE",E,"\"/\" on the numeric keypad.",N,N],[17,"KEY_F1",E,"F1 key.",N,N],[17,"KEY_F2",E,"F2 key.",N,N],[17,"KEY_F3",E,"F3 key.",N,N],[17,"KEY_F4",E,"F4 key.",N,N],[17,"KEY_F5",E,"F5 key.",N,N],[17,"KEY_F6",E,"F6 key.",N,N],[17,"KEY_F7",E,"F7 key.",N,N],[17,"KEY_F8",E,"F8 key.",N,N],[17,"KEY_F9",E,"F9 key.",N,N],[17,"KEY_F10",E,"F10 key.",N,N],[17,"KEY_F11",E,"F11 key.",N,N],[17,"KEY_F12",E,"F12 key.",N,N],[17,"KEY_F13",E,"F13 key.",N,N],[17,"KEY_F14",E,"F14 key.",N,N],[17,"KEY_F15",E,"F15 key.",N,N],[17,"KEY_F16",E,"F16 key.",N,N],[17,"KEY_F17",E,"F17 key.",N,N],[17,"KEY_F18",E,"F18 key.",N,N],[17,"KEY_F19",E,"F19 key.",N,N],[17,"KEY_F20",E,"F20 key.",N,N],[17,"KEY_F21",E,"F21 key.",N,N],[17,"KEY_F22",E,"F22 key.",N,N],[17,"KEY_F23",E,"F23 key.",N,N],[17,"KEY_F24",E,"F24 key.",N,N],[17,"KEY_NUM_LOCK",E,"Num Lock key.",N,N],[17,"KEY_SCROLL_LOCK",E,"Scroll Lock key.",N,N],[17,"KEY_WIN_OEM_FJ_JISHO",E,R[1],N,N],[17,"KEY_WIN_OEM_FJ_MASSHOU",E,R[1],N,N],[17,"KEY_WIN_OEM_FJ_TOUROKU",E,R[1],N,N],[17,"KEY_WIN_OEM_FJ_LOYA",E,"An OEM specific key on Windows. This was used for \"Left…",N,N],[17,"KEY_WIN_OEM_FJ_ROYA",E,"An OEM specific key on Windows. This was used for \"Right…",N,N],[17,"KEY_CIRCUMFLEX",E,"Circumflex (\"^\") key.",N,N],[17,"KEY_EXCLAMATION",E,"Exclamation (\"!\") key.",N,N],[17,"KEY_DOUBLE_QUOTE",E,"Double quote (\"\"\") key.",N,N],[17,"KEY_HASH",E,"Hash (\"#\") key.",N,N],[17,"KEY_DOLLAR",E,"Dollar sign (\"$\") key.",N,N],[17,"KEY_PERCENT",E,"Percent (\"%\") key.",N,N],[17,"KEY_AMPERSAND",E,"Ampersand (\"&\") key.",N,N],[17,"KEY_UNDERSCORE",E,"Underscore (\"_\") key.",N,N],[17,"KEY_OPEN_PAREN",E,"Open parenthesis (\"(\") key.",N,N],[17,"KEY_CLOSE_PAREN",E,"Close parenthesis (\")\") key.",N,N],[17,"KEY_ASTERISK",E,"Asterisk (\"*\") key.",N,N],[17,"KEY_PLUS",E,"Plus (\"+\") key.",N,N],[17,"KEY_PIPE",E,"Pipe (\"|\") key.",N,N],[17,"KEY_HYPHEN_MINUS",E,"Hyphen-US/docs/Minus (\"-\") key.",N,N],[17,"KEY_OPEN_CURLY_BRACKET",E,"Open curly bracket (\"{\") key.",N,N],[17,"KEY_CLOSE_CURLY_BRACKET",E,"Close curly bracket (\"}\") key.",N,N],[17,"KEY_TILDE",E,"Tilde (\"~\") key.",N,N],[17,"KEY_VOLUME_MUTE",E,"Audio mute key.",N,N],[17,"KEY_VOLUME_DOWN",E,"Audio volume down key",N,N],[17,"KEY_VOLUME_UP",E,"Audio volume up key",N,N],[17,"KEY_COMMA",E,"Comma (\",\") key.",N,N],[17,"KEY_PERIOD",E,"Period (\".\") key.",N,N],[17,"KEY_SLASH",E,"Slash (\"/\") key.",N,N],[17,"KEY_BACK_QUOTE",E,"Back tick (\"`\") key.",N,N],[17,"KEY_OPEN_BRACKET",E,"Open square bracket (\"[\") key.",N,N],[17,"KEY_BACK_SLASH",E,"Back slash (\"\") key.",N,N],[17,"KEY_CLOSE_BRACKET",E,"Close square bracket (\"]\") key.",N,N],[17,"KEY_QUOTE",E,"Quote (''') key.",N,N],[17,"KEY_META",E,"Meta key on Linux, Command key on Mac.",N,N],[17,"KEY_ALTGR",E,"AltGr key (Level 3 Shift key or Level 5 Shift key) on Linux.",N,N],[17,"KEY_WIN_ICO_HELP",E,R[2],N,N],[17,"KEY_WIN_ICO_00",E,R[2],N,N],[17,"KEY_WIN_ICO_CLEAR",E,R[2],N,N],[17,"KEY_WIN_OEM_RESET",E,R[1],N,N],[17,"KEY_WIN_OEM_JUMP",E,R[1],N,N],[17,"KEY_WIN_OEM_PA1",E,R[1],N,N],[17,"KEY_WIN_OEM_PA2",E,R[1],N,N],[17,"KEY_WIN_OEM_PA3",E,R[1],N,N],[17,"KEY_WIN_OEM_WSCTRL",E,R[1],N,N],[17,"KEY_WIN_OEM_CUSEL",E,R[1],N,N],[17,"KEY_WIN_OEM_ATTN",E,R[1],N,N],[17,"KEY_WIN_OEM_FINISH",E,R[1],N,N],[17,"KEY_WIN_OEM_COPY",E,R[1],N,N],[17,"KEY_WIN_OEM_AUTO",E,R[1],N,N],[17,"KEY_WIN_OEM_ENLW",E,R[1],N,N],[17,"KEY_WIN_OEM_BACKTAB",E,R[1],N,N],[17,"KEY_ATTN",E,"Attn (Attention) key of IBM midrange computers, e.g.,…",N,N],[17,"KEY_CRSEL",E,"CrSel (Cursor Selection) key of IBM 3270 keyboard layout.",N,N],[17,"KEY_EXSEL",E,"ExSel (Extend Selection) key of IBM 3270 keyboard layout.",N,N],[17,"KEY_EREOF",E,"Erase EOF key of IBM 3270 keyboard layout.",N,N],[17,"KEY_PLAY",E,"Play key of IBM 3270 keyboard layout.",N,N],[17,"KEY_ZOOM",E,"Zoom key.",N,N],[17,"KEY_PA1",E,"PA1 key of IBM 3270 keyboard layout.",N,N],[17,"KEY_WIN_OEM_CLEAR",E,"Clear key, but we're not sure the meaning difference from…",N,N]],"p":[]};
initSearch(searchIndex);addSearchOptions(searchIndex);