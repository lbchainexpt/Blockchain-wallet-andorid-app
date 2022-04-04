(window.webpackJsonp=window.webpackJsonp||[]).push([[180],{670:function(g,I,C){"use strict";C.r(I);var A=C(1),t=Object(A.a)({},(function(){var g=this,I=g.$createElement,C=g._self._c||I;return C("ContentSlotsDistributor",{attrs:{"slot-key":g.$parent.slotKey}},[C("h1",{attrs:{id:"ledger-nano支持"}},[C("a",{staticClass:"header-anchor",attrs:{href:"#ledger-nano支持"}},[g._v("#")]),g._v(" Ledger Nano支持")]),g._v(" "),C("h2",{attrs:{id:"关于hd钱包"}},[C("a",{staticClass:"header-anchor",attrs:{href:"#关于hd钱包"}},[g._v("#")]),g._v(" 关于HD钱包")]),g._v(" "),C("p",[g._v("HD钱包（分层确定性钱包）, 最初是在比特币的"),C("a",{attrs:{href:"https://github.com/bitcoin/bips/blob/master/bip-0032.mediawiki",target:"_blank",rel:"noopener noreferrer"}},[g._v("BIP32"),C("OutboundLink")],1),g._v("提案中提出,\n是一种特殊的钱包类型，可以让用户从单个种子派生任意数量的账户。为了更好的理解, 让我们定义以下术语：")]),g._v(" "),C("ul",[C("li",[C("strong",[g._v("钱包")]),g._v(": 从一个给定的seed中获得的一组账户。")]),g._v(" "),C("li",[C("strong",[g._v("账户")]),g._v(": 一组公钥/私钥对。")]),g._v(" "),C("li",[C("strong",[g._v("私钥")]),g._v(": 私钥是用于签署消息的私密信息。在区块链领域, 一个私钥就是一个账户的所有者。永远不要想他人透露用户的私钥。")]),g._v(" "),C("li",[C("strong",[g._v("公钥")]),g._v(": 公钥是通过对私钥上使用不可逆的加密函数而获得的一条信息。从公钥中可以导出地址。但无法从公钥中逆向获得私钥。")]),g._v(" "),C("li",[C("strong",[g._v("地址")]),g._v(": 地址是一个公开的用于标识账户的，带着可读前缀的字符串。通过对公钥使用加密函数获得。")]),g._v(" "),C("li",[C("strong",[g._v("数字签名")]),g._v(": 数字签名是一段加密信息，证明了指定私钥的所有者在不泄露其私钥的情况下，批准了指定消息。")]),g._v(" "),C("li",[C("strong",[g._v("种子")]),g._v(": 同助记词。")]),g._v(" "),C("li",[C("strong",[g._v("助记词")]),g._v(":  助记符是一串单词，用作种子来派生私钥。助记符是每个钱包的核心。永远不要丢失你的助记词。把它写在一张纸上，然后把它存放在安全的地方。如果你失去了它，那就没有办法去重新获取它了。如果某人获得了助记词访问权限，他们将获得所有相关帐户的访问权限。")])]),g._v(" "),C("p",[g._v("HD钱包的核心是种子。用这个种子用户可以确定地生成子帐户。要从种子生成子帐户，使用了单向的数学转换。要决定生成哪个帐户，用户指定"),C("code",[g._v("path")]),g._v("，通常是"),C("code",[g._v("integer")]),g._v("（"),C("code",[g._v("0")]),g._v("，"),C("code",[g._v("1")]),g._v("，"),C("code",[g._v("2")]),g._v("，...）。")]),g._v(" "),C("p",[g._v("例如，通过将"),C("code",[g._v("path")]),g._v("指定为"),C("code",[g._v("0")]),g._v("，钱包将从种子生成"),C("code",[g._v("0号私钥")]),g._v("。然后，可以从"),C("code",[g._v("0号私钥")]),g._v("生成“"),C("code",[g._v("号公钥")]),g._v("。最后，可以从"),C("code",[g._v("0号公钥")]),g._v("生成"),C("code",[g._v("0号地址")]),g._v("。所有这些步骤都是单向的，这意味着"),C("code",[g._v("公钥")]),g._v("无法从"),C("code",[g._v("地址")]),g._v("中获得，"),C("code",[g._v("私钥")]),g._v("无法从"),C("code",[g._v("公钥")]),g._v("中获得，......")]),g._v(" "),C("tm-code-block",{staticClass:"codeblock",attrs:{language:"",base64:"ICAgICBBY2NvdW50IDAgICAgICAgICAgICAgICAgICAgICAgICAgQWNjb3VudCAxICAgICAgICAgICAgICAgICAgICAgICAgIEFjY291bnQgMgoKKy0tLS0tLS0tLS0tLS0tLS0tLSsgICAgICAgICAgICAgICstLS0tLS0tLS0tLS0tLS0tLS0rICAgICAgICAgICAgICAgKy0tLS0tLS0tLS0tLS0tLS0tLSsKfCAgICAgICAgICAgICAgICAgIHwgICAgICAgICAgICAgIHwgICAgICAgICAgICAgICAgICB8ICAgICAgICAgICAgICAgfCAgICAgICAgICAgICAgICAgIHwKfCAgICBBZGRyZXNzIDAgICAgIHwgICAgICAgICAgICAgIHwgICAgQWRkcmVzcyAxICAgICB8ICAgICAgICAgICAgICAgfCAgICBBZGRyZXNzIDIgICAgIHwKfCAgICAgICAgXiAgICAgICAgIHwgICAgICAgICAgICAgIHwgICAgICAgIF4gICAgICAgICB8ICAgICAgICAgICAgICAgfCAgICAgICAgXiAgICAgICAgIHwKfCAgICAgICAgfCAgICAgICAgIHwgICAgICAgICAgICAgIHwgICAgICAgIHwgICAgICAgICB8ICAgICAgICAgICAgICAgfCAgICAgICAgfCAgICAgICAgIHwKfCAgICAgICAgfCAgICAgICAgIHwgICAgICAgICAgICAgIHwgICAgICAgIHwgICAgICAgICB8ICAgICAgICAgICAgICAgfCAgICAgICAgfCAgICAgICAgIHwKfCAgICAgICAgfCAgICAgICAgIHwgICAgICAgICAgICAgIHwgICAgICAgIHwgICAgICAgICB8ICAgICAgICAgICAgICAgfCAgICAgICAgfCAgICAgICAgIHwKfCAgICAgICAgKyAgICAgICAgIHwgICAgICAgICAgICAgIHwgICAgICAgICsgICAgICAgICB8ICAgICAgICAgICAgICAgfCAgICAgICAgKyAgICAgICAgIHwKfCAgUHVibGljIGtleSAwICAgIHwgICAgICAgICAgICAgIHwgIFB1YmxpYyBrZXkgMSAgICB8ICAgICAgICAgICAgICAgfCAgUHVibGljIGtleSAyICAgIHwKfCAgICAgICAgXiAgICAgICAgIHwgICAgICAgICAgICAgIHwgICAgICAgIF4gICAgICAgICB8ICAgICAgICAgICAgICAgfCAgICAgICAgXiAgICAgICAgIHwKfCAgICAgICAgfCAgICAgICAgIHwgICAgICAgICAgICAgIHwgICAgICAgIHwgICAgICAgICB8ICAgICAgICAgICAgICAgfCAgICAgICAgfCAgICAgICAgIHwKfCAgICAgICAgfCAgICAgICAgIHwgICAgICAgICAgICAgIHwgICAgICAgIHwgICAgICAgICB8ICAgICAgICAgICAgICAgfCAgICAgICAgfCAgICAgICAgIHwKfCAgICAgICAgfCAgICAgICAgIHwgICAgICAgICAgICAgIHwgICAgICAgIHwgICAgICAgICB8ICAgICAgICAgICAgICAgfCAgICAgICAgfCAgICAgICAgIHwKfCAgICAgICAgKyAgICAgICAgIHwgICAgICAgICAgICAgIHwgICAgICAgICsgICAgICAgICB8ICAgICAgICAgICAgICAgfCAgICAgICAgKyAgICAgICAgIHwKfCAgUHJpdmF0ZSBrZXkgMCAgIHwgICAgICAgICAgICAgIHwgIFByaXZhdGUga2V5IDEgICB8ICAgICAgICAgICAgICAgfCAgUHJpdmF0ZSBrZXkgMiAgIHwKfCAgICAgICAgXiAgICAgICAgIHwgICAgICAgICAgICAgIHwgICAgICAgIF4gICAgICAgICB8ICAgICAgICAgICAgICAgfCAgICAgICAgXiAgICAgICAgIHwKKy0tLS0tLS0tLS0tLS0tLS0tLSsgICAgICAgICAgICAgICstLS0tLS0tLS0tLS0tLS0tLS0rICAgICAgICAgICAgICAgKy0tLS0tLS0tLS0tLS0tLS0tLSsKICAgICAgICAgfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfAogICAgICAgICB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8CiAgICAgICAgIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwKICAgICAgICAgKy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKwogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICArLS0tLS0tLS0tKy0tLS0tLS0tLSsKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICAgICAgICAgICAgICB8CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgIE1uZW1vbmljIChTZWVkKSAgfAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgICAgICAgICAgICAgIHwKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKy0tLS0tLS0tLS0tLS0tLS0tLS0rCg=="}}),g._v(" "),C("p",[g._v("从种子中推导出帐户的过程是确定性的。这意味着给定相同的路径，派生出私钥将始终相同。")]),g._v(" "),C("p",[g._v("存储在帐户中的资金由私钥控制。此私钥对助记词使用单向函数生成的。如果丢失了私钥，则可以使用助记词恢复它。但是，如果丢失了助记词，则将无法访问所有派生的私钥。同样，如果有人获得了你的助记词访问权限，他们就可以访问所有相关帐户。")]),g._v(" "),C("h2",{attrs:{id:"ledger支持hd钱包"}},[C("a",{staticClass:"header-anchor",attrs:{href:"#ledger支持hd钱包"}},[g._v("#")]),g._v(" Ledger支持HD钱包")]),g._v(" "),C("p",[g._v("在Ledger钱包的内核，有一个用于生成私钥的助记词。初始化Ledger时，会生成助记词。")]),g._v(" "),C("p",[g._v("::: 危险\n"),C("strong",[g._v("不要遗失或与任何人分享你的12/24个单词。为防止盗窃或资金损失，最好确保备份多个助记词拷贝，并将其存放在安全可靠的地方，并且只有你知道如何访问。如果有人能够访问你的助记词，他们将能够访问你的私钥并控制与其关联的帐户")]),g._v("\n:::")]),g._v(" "),C("p",[g._v("助记词与Cosmos帐户体系兼容。用于在Cosmos Hub网络上生成地址和交易的工具称为"),C("code",[g._v("gaiad")]),g._v("，它支持从Ledger种子派生帐户私钥。请注意，Ledger钱包充当种子和私钥的沙盒，并且对交易进行签名的过程完全在内部进行。没有任何私人信息会离开Ledger钱包。")]),g._v(" "),C("p",[g._v("要将"),C("code",[g._v("gaiad")]),g._v("与Ledger钱包一起使用，你需要具备以下条件：")]),g._v(" "),C("ul",[C("li",[C("RouterLink",{attrs:{to:"/zh/resources/delegator-guide-cli.html#using-a-ledger-device"}},[g._v("在Ledger Nano中安装"),C("code",[g._v("COSMOS")]),g._v("应用并生成账户")])],1),g._v(" "),C("li",[C("RouterLink",{attrs:{to:"/zh/resources/delegator-guide-cli.html#accessing-the-cosmos-hub-network"}},[g._v("有一个你打算连接的可访问的并处于运行状态的"),C("code",[g._v("gaiad")]),g._v("实例")])],1),g._v(" "),C("li",[C("RouterLink",{attrs:{to:"/zh/resources/delegator-guide-cli.html#setting-up-gaiad"}},[g._v("一个同你所选的"),C("code",[g._v("gaiad")]),g._v("实例相连接的"),C("code",[g._v("gaiad")]),g._v("实例")])],1)]),g._v(" "),C("p",[g._v("现在，你都准备好去"),C("RouterLink",{attrs:{to:"/zh/resources/delegator-guide-cli.html#sending-transactions"}},[g._v("发送交易到网络")]),g._v(".")],1)],1)}),[],!1,null,null,null);I.default=t.exports}}]);