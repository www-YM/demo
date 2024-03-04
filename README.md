## 本地启动服务

### Step1. 项目根目录创建 `.env.development` 文件，填入

```
SKIP_PREFLIGHT_CHECK=true

# NEXT_PUBLIC_SENTRY_DSN=https://a6cbe9bad19b4917a6f1d2fa88676eb5@o315715.ingest.sentry.io/5805389
# SENTRY_SERVER_INIT_PATH=/Users/ivan/sites/inkpod/web/.next/server/sentry/initServerSDK.js

NEXT_PUBLIC_API_BASE_URL=https://api-test-nestjs.wowfulfillment.com/api

NEXT_PUBLIC_WOW_NEXT_PUBLIC_API_BASE_URL=https://api-test.wowfulfillment.com

NEXT_PUBLIC_SHOPIFY_KEY=9cf66fe29c09791d5d6966317e3d3e8e
NEXT_PUBLIC_SHOPIFY_SCOPES=read_products,write_products,read_orders,write_orders,read_fulfillments,write_fulfillments,read_inventory,write_inventory,read_script_tags,write_script_tags,read_content,write_content,read_themes,write_themes
NEXT_PUBLIC_SHOPIFY_REDIRECT_URI=https://selfish-lionfish-99.loca.lt/auth

NEXT_PUBLIC_STRIPE_PUBLIC_KEY=pk_test_n9Z4HdYfeno4fkn5fqgEIkFl00bnp2VGkY

NEXT_PUBLIC_PUSHER_AUTH_ENDPOINT=https://api-test-nestjs.wowfulfillment.com/api/pusher/auth
NEXT_PUBLIC_PUSHER_KEY=01f10c8ed34fde1a3baa
NEXT_PUBLIC_PUSHER_CLUSTER=us2

################################################
# 以下为 MOCK SERVICE WORKER 相关配置
# 开启： NEXT_PUBLIC_MOCK_SERVICE_WORKER_ENABLED=1
# 关闭： NEXT_PUBLIC_MOCK_SERVICE_WORKER_ENABLED=
#

NEXT_PUBLIC_MOCK_SERVICE_WORKER_ENABLED=1

```

### Step2. 安装依赖

执行 `yarn` 安装依赖

### Step3. 运行服务

执行 `yarn start:dev` 运行服务

## 线上测试服务器 api URL
php 接口的URL：https://api-test.wowfulfillment.com
nestjs 接口URL：https://api-test-nestjs.wowfulfillment.com/api

## 登录状态

在进行登录时，不同测试场景对应的账号信息在 `/mocks/data/accounts-data.ts` 文件内

线上
pm2 start yarn --name "nextjs" --interpreter bash -- start
