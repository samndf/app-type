module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/essential',
    '@vue/standard',
    '@vue/typescript/recommended'
  ],
  parserOptions: {
    ecmaVersion: 2020
  },
  rules: {
    'no-console': 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',

    // 要使用分号
    semi: ['error', 'always'],

    // 字符串统一使用单引号
    quotes: ['error', 'single'],

    // 不要定义未使用的变量
    // 'no-unused-vars': ['error', 'all'],

    // 关键字后面加空格
    'keyword-spacing': ['error', {
      before: true,
      after: true
    }],

    // 函数声明时括号与函数名间加空格
    'space-before-function-paren': ['error', {
      anonymous: 'always',
      named: 'never',
      asyncArrow: 'always'
    }],

    // 始终使用 === 替代 ==
    eqeqeq: ['error', 'always'],

    // 字符串拼接操作符 (Infix operators) 之间要留空格
    'space-infix-ops': ['error'],

    'comma-spacing': ['error', {
      before: false,
      after: true
    }],

    // else 关键字要与花括号保持不同行
    'brace-style': ['error', 'stroustrup'],

    // 多行 if 语句的的括号不能省
    curly: ['error', 'all'],

    // 不要丢掉异常处理中err参数
    'handle-callback-err': ['error', 'err'],

    // 使用浏览器全局变量时加上 window. 前缀
    'no-undef': ['error', { typeof: false }],

    // 不允许有连续多行空行。
    'no-multiple-empty-lines': ['error', { max: 2, maxEOF: 1 }],

    // 对于三元运算符 ? 和 : 与他们所负责的代码处于不同行
    'operator-linebreak': ['error', 'after'],

    // 每个 var 关键字单独声明一个变量
    'one-var': ['error', 'never'],

    // 条件语句中赋值语句使用括号包起来.这样使得代码更加清晰可读,而不会认为是将条件判断语句
    // 的全等号 === 错写成了等号 =
    'no-cond-assign': ['error', 'always'],

    // 单行代码块两边加空格
    'block-spacing': ['error', 'always'],

    // 对于变量和函数名统一使用驼峰命名法
    camelcase: ['error', { properties: 'always' }],

    // 不允许有多余的行末逗号
    'comma-dangle': ['error', {
      arrays: 'never',
      objects: 'never',
      imports: 'never',
      exports: 'never',
      functions: 'ignore'
    }],

    // 始终将逗号置于行末
    'comma-style': ['error', 'last'],

    // 点号操作符须与属性需在同一行
    'dot-location': ['error', 'property'],

    // 文件末尾留一空行
    'eol-last': ['error', 'always'],

    // 函数调用时标识符与括号间不留间隔
    'func-call-spacing': ['error', 'never'],

    // 键值对当中冒号与值之间要留空白
    'key-spacing': ['error', {
      beforeColon: false,
      afterColon: true,
      mode: 'strict'
    }],

    // 构造函数要以大写字母开头
    'new-cap': ['error'],

    // 无参的构造函数调用时要带上括号
    'new-parens': ['error'],

    // 对象中定义了存值器，一定要对应的定义取值器
    'accessor-pairs': ['error'],

    // 子类的构造器中一定要调用 super
    'constructor-super': ['error'],

    // 使用数组字面量而不是构造器
    'no-array-constructor': ['off'],

    // 避免使用 arguments.callee 和 arguments.caller
    // 'no-caller': ['error'],

    // 避免对类名重新赋值
    'no-class-assign': ['error'],

    // 避免修改使用 const 声明的变量
    'no-const-assign': ['error'],

    // 避免使用常量作为条件表达式的条件(循环语句除外)
    'no-constant-condition': ['error'],

    // 不要定义冗余的函数参数
    'no-dupe-args': ['error'],

    // 类中不要定义冗余的属性
    'no-dupe-class-members': ['error'],

    // 对象字面量中不要定义重复的属性
    'no-dupe-keys': ['error'],

    // switch 语句中不要定义重复的 case 分支
    'no-duplicate-case': ['error'],

    // 同一模块有多个导入时一次性写完
    'no-duplicate-imports': ['error'],

    // 不要解构空值
    'no-empty-pattern': ['error'],

    // 不要使用 eval()
    'no-eval': ['error'],

    // catch 中不要对错误重新赋值
    'no-ex-assign': ['error'],

    // 不要扩展原生对象
    'no-extend-native': ['error'],

    // 避免多余的函数上下文绑定
    'no-extra-bind': ['error'],

    // 避免不必要的布尔转换
    'no-extra-boolean-cast': ['error'],

    // 不要使用多余的括号包裹函数
    'no-extra-parens': ['error'],

    // switch 一定要使用 break 来将条件分支正常中断
    'no-fallthrough': ['error'],

    // 不要省去小数点前面的0
    'no-floating-decimal': ['error'],

    // 避免对声明过的函数重新赋值
    'no-func-assign': ['error'],

    // 不要对全局只读对象重新赋值
    'no-global-assign': ['error'],

    // 注意隐式的 eval()
    'no-implied-eval': ['error'],

    // 嵌套的代码块中禁止再定义函数
    'no-inner-declarations': ['error'],

    // 不要向 RegExp 构造器传入非法的正则表达式
    'no-invalid-regexp': ['error'],

    // 不要使用非法的空白符
    'no-irregular-whitespace': ['error'],

    // 禁止使用 __iterator__
    'no-iterator': ['error'],

    // 外部变量不要与对象属性重名
    'no-label-var': ['error'],

    // 不要使用标签语句
    'no-labels': ['error'],

    // 不要书写不必要的嵌套代码块
    'no-lone-blocks': ['error'],

    // 不要混合使用空格与制表符作为缩进
    'no-mixed-spaces-and-tabs': ['error'],

    // 不要混合使用空格与制表符作为缩进
    'no-multi-spaces': ['error'],

    // 不要使用多行字符串
    'no-multi-str': ['error'],

    // new 创建对象实例后可以不用赋值给变量
    'no-new': ['warn'],

    // 禁止使用 Function 构造器
    'no-new-func': ['error'],

    // 禁止使用 Object 构造器
    'no-new-object': ['error'],

    // 禁止使用 new require
    'no-new-require': ['error'],

    // 禁止使用 Symbol 构造器
    'no-new-symbol': ['error'],

    // 禁止使用原始包装器
    'no-new-wrappers': ['error'],

    // 不要将全局对象的属性作为函数调用
    'no-obj-calls': ['error'],

    // 不要使用八进制字面量
    'no-octal': ['error'],

    // 字符串字面量中也不要使用八进制转义字符
    'no-octal-escape': ['error'],

    // 使用 __dirname 和 __filename 时尽量避免使用字符串拼接
    'no-path-concat': ['warn'],

    // 使用 getPrototypeOf 来替代 __proto__
    'no-proto': ['error'],

    // 不要重复声明变量
    'no-redeclare': ['error'],

    // 正则中避免使用多个空格
    'no-regex-spaces': ['error'],

    // return 语句中的赋值必需有括号包裹
    'no-return-assign': ['error'],

    // 避免将变量赋值给自己
    'no-self-assign': ['error'],

    // 避免将变量与自己进行比较操作
    'no-self-compare': ['error'],

    // 避免使用逗号操作符
    'no-sequences': ['error'],

    // 不要随意更改关键字的值
    'no-shadow-restricted-names': ['error'],

    // 禁止使用稀疏数组（Sparse arrays）
    'no-sparse-arrays': ['error'],

    // 不要使用制表符
    'no-tabs': ['error'],

    // 正确使用 ES6 中的字符串模板
    'no-template-curly-in-string': ['error'],

    // 使用 this 前请确保 super() 已调用
    'no-this-before-super': ['warn'],

    // 用 throw 抛错时，抛出 Error 对象而不是字符串
    'no-throw-literal': ['warn'],

    // 行末不留空格
    'no-trailing-spaces': ['error'],

    // 不要使用 undefined 来初始化变量
    'no-undef-init': ['warn'],

    // 循环语句中注意更新循环变量
    'no-unmodified-loop-condition': ['error'],

    // 如果有更好的实现，尽量不要使用三元表达式
    'no-unneeded-ternary': ['warn'],

    // return，throw，continue 和 break 后不要再跟代码
    'no-unreachable': ['error'],

    // finally 代码块中不要再改变程序执行流程
    'no-unsafe-finally': ['error'],

    // 关系运算符的左值不要做取反操作
    'no-unsafe-negation': ['error'],

    // 避免不必要的 .call() 和 .apply()
    'no-useless-call': ['error'],

    // 避免使用不必要的计算值作对象属性
    'no-useless-computed-key': ['error'],

    // 禁止多余的构造器
    'no-useless-constructor': ['error'],

    // 禁止不必要的转义
    'no-useless-escape': ['error'],

    // import, export 和解构操作中，禁止赋值到同名变量
    'no-useless-rename': ['error'],

    // 属性前面不要加空格
    'no-whitespace-before-property': ['error'],

    // 禁止使用 with
    'no-with': ['error'],

    // 禁用一元操作符 ++ 和 --
    'no-plusplus': ['error'],

    // 禁用嵌套的三元表达式
    'no-nested-ternary': ['error'],

    // 对象属性换行时注意统一代码风格
    'object-property-newline': ['error'],

    // 代码块中避免多余留白
    // 'padded-blocks': ['error'],

    // 展开运算符与它的表达式间不要留空白
    'rest-spread-spacing': ['error'],

    // 遇到分号时空格要后留前不留
    'semi-spacing': ['error', { before: false, after: true }],

    // 代码块首尾留空格
    'space-before-blocks': ['error', 'always'],

    // 圆括号间不留空格
    'space-in-parens': ['error', 'never'],

    // 一元运算符后面跟一个空格
    'space-unary-ops': ['error', { words: true, nonwords: false }],

    // 注释首尾留空格
    'spaced-comment': ['error', 'always', { exceptions: ['-', '+', '!'] }],

    // 模板字符串中变量前后不加空格
    'template-curly-spacing': ['error', 'never'],

    // 自调用匿名函数 (IIFEs) 使用括号包裹
    'wrap-iife': ['error', 'outside'],

    // 请书写优雅的条件语句（avoid Yoda conditions）
    yoda: ['error', 'never'],

    // 强制一行的最大长度
    'max-len': ['error', { code: 100 }],

    // 强制每一行中所允许的最大语句数量
    'max-statements-per-line': ['error', { max: 2 }],

    'require-await': ['warn'],

    // 要求或禁止在语句间填充空行
    'padding-line-between-statements': ['error',
      { blankLine: 'any', prev: ['const', 'let', 'var'], next: ['const', 'let', 'var'] },
      { blankLine: 'always', prev: 'directive', next: '*' },
      { blankLine: 'any', prev: 'directive', next: 'directive' },
      {
        blankLine: 'always',
        prev: '*',
        next: [
          'if', 'while', 'try', 'switch', 'return', 'block', 'class', 'iife',
          'function', 'for', 'export', 'do', 'block-like', 'multiline-block-like'
        ]
      },
      {
        blankLine: 'always',
        prev: [
          'if', 'while', 'try', 'switch', 'block', 'class', 'iife',
          'function', 'for', 'export', 'do', 'block-like', 'multiline-block-like'
        ],
        next: '*'
      }
    ],

    '@typescript-eslint/interface-name-prefix': 0,
    '@typescript-eslint/no-inferrable-types': 0,
    '@typescript-eslint/no-explicit-any': 0,
    '@typescript-eslint/no-empty-interface': 0,
    '@typescript-eslint/no-var-requires': 0,
    '@typescript-eslint/explicit-module-boundary-types': 0,

    // 关闭const提示
    'prefer-const': 'off',

    // Vue 代码风格设置
    'vue/no-use-v-if-with-v-for': ['error', {
      allowUsingIterationVar: true
    }],
    'vue/no-template-key': 0,

    indent: 'off',
    'vue/script-indent': ['error', 2, {
      baseIndent: 1,
      switchCase: 1
    }],

    'vue/no-parsing-error': [2, { 'x-invalid-end-tag': false }]
  },
  overrides: [
    {
      files: [
        '**/__tests__/*.{j,t}s?(x)',
        '**/tests/unit/**/*.spec.{j,t}s?(x)'
      ],
      env: {
        jest: true
      }
    }
  ]
};
