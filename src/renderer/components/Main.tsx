import React, { useState } from "react";
import {
  Grid,
  Box,
  TextField,
  Button,
  Tabs,
  Tab,
  useTheme,
} from "@mui/material";
import Section from "./Section";

import BasicTable from "./BasicTable";

export default function MainScreen() {
  const theme = useTheme();
  const [tabIndex, setTabIndex] = useState(0);
  const handleTabIndex = (event: React.SyntheticEvent, newValue: number) => {
    setTabIndex(newValue);
  };
  return (
    <Grid sx={{ py: 2 }} container>
      <Grid item xs={4}>
        <Box sx={{ px: 2, my: 2 }}>
          <Section label="激活区">
            <Box sx={{ mb: 1 }}>
              <TextField
                size="small"
                id="standard-basic"
                label="卡密"
                variant="standard"
                fullWidth
              />
            </Box>
            <Button
              size="small"
              sx={{
                mb: 1,
              }}
              variant="contained"
              disableElevation
              fullWidth
            >
              激活
            </Button>
            <Button
              size="small"
              sx={{ mb: 1 }}
              variant="contained"
              disableElevation
              fullWidth
            >
              端口通道验证
            </Button>
            <Button
              size="small"
              sx={{ mb: 1 }}
              variant="contained"
              disableElevation
              fullWidth
            >
              联系作者
            </Button>
            <Button size="small" variant="contained" disableElevation fullWidth>
              号商合作联系方
            </Button>
          </Section>
        </Box>
        <Box sx={{ px: 2 }}>
          <Section label="登录区">
            <Grid container columnSpacing={2}>
              <Grid item xs={6}>
                <Button
                  size="small"
                  variant="contained"
                  disableElevation
                  fullWidth
                >
                  导入协议号
                </Button>
              </Grid>
              <Grid item xs={6}>
                <Button
                  size="small"
                  variant="contained"
                  disableElevation
                  fullWidth
                >
                  账号验证口
                </Button>
              </Grid>
              <Box
                component={"div"}
                sx={{
                  px: 1,
                  pt: 2,
                  color: theme.palette.error.main,
                  fontSize: 14,
                  lineHeight: 1.25,
                }}
              >
                注：账号密码的格式是免密的Deder号，并不是
                账号密码格式的直登号，注册机注册出来的可 以直接用。
              </Box>
            </Grid>
          </Section>
        </Box>
      </Grid>
      <Grid item xs={8}>
        <Box sx={{ pr: 2 }}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <Tabs
              value={tabIndex}
              onChange={handleTabIndex}
              aria-label="basic tabs example"
            >
              <Tab label="账号管理区" />
              <Tab label="评论来源设置区" />
              <Tab label="操作必看" />
            </Tabs>
          </Box>
          {tabIndex === 0 && <BasicTable />}
          {tabIndex === 1 && <Box sx={{ p: 3 }}>TODO</Box>}
          {tabIndex === 2 && <Box sx={{ p: 3 }}>TODO</Box>}
        </Box>
      </Grid>
      <Grid item xs={8}>
        <Box sx={{ px: 2, py: 2 }}>
          <Section label="工作台">
            <Box sx={{ backgroundColor: "#000000", minHeight: 400 }}></Box>
          </Section>
        </Box>
      </Grid>
      <Grid item xs={4}>
        <Box sx={{ pl: 2, pr: 4 }}>
          <Grid
            sx={{
              height: "100%",
              py: 10,
            }}
            container
            direction={"column"}
            justifyContent="space-around"
          >
            <Grid item>
              <Button variant="contained" disableElevation fullWidth>
                开始运行
              </Button>
            </Grid>
            <Grid item>
              <Button variant="contained" disableElevation fullWidth>
                暂停当前操作F3
              </Button>
            </Grid>
            <Grid item>
              <Button variant="contained" disableElevation fullWidth>
                结束当前操作F1
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Grid>
    </Grid>
  );
}
