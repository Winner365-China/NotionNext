/* eslint-disable react/no-unknown-property */
/**
 * 此处样式只对当前主题生效
 * 此处不支持tailwindCSS的 @apply 语法
 * @returns
 */
const Style = () => {
  return (
    <style jsx global>{`
      body {
        background-color: #f7f9fe;
        overflow-x: hidden;
      }

      // 公告栏中的字体固定白色
      #theme-heo #announcement-content .notion {
        color: white;
      }

      ::-webkit-scrollbar-thumb {
        background: rgba(60, 60, 67, 0.4);
        border-radius: 8px;
        cursor: pointer;
      }

      ::-webkit-scrollbar {
        width: 8px;
        height: 8px;
      }

      #more {
        white-space: nowrap;
      }

      .today-card-cover {
        -webkit-mask-image: linear-gradient(to top, transparent 5%, black 70%);
        mask-image: linear-gradient(to top, transparent 5%, black 70%);
      }

      .recent-top-post-group::-webkit-scrollbar {
        display: none;
      }

      .scroll-hidden::-webkit-scrollbar {
        display: none;
      }

      * {
        box-sizing: border-box;
      }

      // 标签滚动动画
      .tags-group-wrapper {
        animation: rowup 60s linear infinite;
      }

      @keyframes rowup {
        0% {
          transform: translateX(0%);
        }
        100% {
          transform: translateX(-50%);
        }
      }
      //Twikoo样式美化👇
/* 设置文字内容 :nth-child(1)的作用是选择第几个 */
.el-input.el-input--small.el-input-group.el-input-group--prepend:nth-child(1):before {
  content: '必填，昵称将会在评论列表中显示';
}
.el-input.el-input--small.el-input-group.el-input-group--prepend:nth-child(2):before {
  content: '必填，用于评论被回复时的邮件通知和反垃圾';
}
.el-input.el-input--small.el-input-group.el-input-group--prepend:nth-child(3):before {
  content: '选填，填写后会在您的昵称上添加一个超链接';
}
/* 当用户点击输入框时显示 */
.el-input.el-input--small.el-input-group.el-input-group--prepend:focus-within::before,
.el-input.el-input--small.el-input-group.el-input-group--prepend:focus-within::after {
  display: block;
}
/* 主内容区 */
.el-input.el-input--small.el-input-group.el-input-group--prepend::before {
  /* 先隐藏起来 */
  display: none;
  /* 绝对定位 */
  position: absolute;
  /* 向上移动60像素 */
  top: -60px;
  /* 文字强制不换行，防止left:50%导致的文字换行 */
  white-space: nowrap;
  /* 圆角 */
  border-radius: 10px;
  /* 距离左边50% */
  left: 50%;
  /* 然后再向左边挪动自身的一半，即可实现居中 */
  transform: translate(-50%);
  /* 填充 */
  padding: 14px 18px;
  background: #444;
  color: #fff;
}
/* 小角标 */
.el-input.el-input--small.el-input-group.el-input-group--prepend::after {
  display: none;
  content: '';
  position: absolute;
  /* 内容大小（宽高）为0且边框大小不为0的情况下，每一条边（4个边）都是一个三角形，组成一个正方形。
  我们先将所有边框透明，再给其中的一条边添加颜色就可以实现小三角图标 */
  border: 12px solid transparent;
  border-top-color: #444;
  left: 50%;
  transform: translate(-50%, -48px);
}
/************ twikoo评论中的背景框样式调整 ************/
#twikoo .tk-content {
  background: rgb(235 235 235 / 60%);
  padding: 10px 15px;
  border-radius: 10px;
}
.tk-content * {
  margin: 0;
}
@-moz-keyframes snackbar-progress {
  from {
      -webkit-transform: scaleX(0);
      -moz-transform: scaleX(0);
      -o-transform: scaleX(0);
      -ms-transform: scaleX(0);
      transform: scaleX(0)
  }
  to {
      -webkit-transform: scaleX(1);
      -moz-transform: scaleX(1);
      -o-transform: scaleX(1);
      -ms-transform: scaleX(1);
      transform: scaleX(1)
  }
}
@-webkit-keyframes snackbar-progress {
  from {
      -webkit-transform: scaleX(0);
      -moz-transform: scaleX(0);
      -o-transform: scaleX(0);
      -ms-transform: scaleX(0);
      transform: scaleX(0)
  }
  to {
      -webkit-transform: scaleX(1);
      -moz-transform: scaleX(1);
      -o-transform: scaleX(1);
      -ms-transform: scaleX(1);
      transform: scaleX(1)
  }
}
@-o-keyframes snackbar-progress {
  from {
      -webkit-transform: scaleX(0);
      -moz-transform: scaleX(0);
      -o-transform: scaleX(0);
      -ms-transform: scaleX(0);
      transform: scaleX(0)
  }
  to {
      -webkit-transform: scaleX(1);
      -moz-transform: scaleX(1);
      -o-transform: scaleX(1);
      -ms-transform: scaleX(1);
      transform: scaleX(1)
  }
}
@keyframes snackbar-progress {
  from {
      -webkit-transform: scaleX(0);
      -moz-transform: scaleX(0);
      -o-transform: scaleX(0);
      -ms-transform: scaleX(0);
      transform: scaleX(0)
  }
  to {
      -webkit-transform: scaleX(1);
      -moz-transform: scaleX(1);
      -o-transform: scaleX(1);
      -ms-transform: scaleX(1);
      transform: scaleX(1)
  }
}
.twikoo svg {
  color: var(#272822)
}
.tk-expand {
  width: 100%;
  cursor: pointer;
  padding: .75em;
  text-align: center;
  -webkit-transition: all .5s;
  -moz-transition: all .5s;
  -o-transition: all .5s;
  -ms-transition: all .5s;
  transition: all .5s;
  border: var(--style-border);
  -webkit-box-shadow: 0 8px 16px -4px rgba(44,45,48,.047);
  box-shadow: 0 8px 16px -4px rgba(44,45,48,.047);
  border-radius: 50px;
  letter-spacing: 5px;
  background-color: var(--anzhiyu-card-bg)
}
#twikoo .tk-comments>.tk-submit {
  overflow: visible!important
}
#twikoo .tk-comments button.el-button.tk-cancel.el-button--default.el-button--small {
  background: var(--anzhiyu-secondbg);
  border-radius: 8px;
  color: var(#272822)
}
#twikoo .tk-comments button.el-button.tk-cancel.el-button--default.el-button--small:hover {
  background: var(--anzhiyu-lighttext);
  color: var(--anzhiyu-white)
}
#twikoo .tk-comments a.tk-submit-action-icon.__markdown {
  display: none
}
#twikoo .tk-comments>div.tk-submit>div.tk-row.actions>a {
  display: none
}
#twikoo .tk-comments .el-button.tk-preview {
  display: none
}
#twikoo .tk-comments .el-button--primary.is-disabled,#twikoo .tk-comments .el-button--primary.is-disabled:active,#twikoo .tk-comments .el-button--primary.is-disabled:focus,#twikoo .tk-comments .el-button--primary.is-disabled:hover {
  opacity: .2;
  -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=20)";
  filter: alpha(opacity=20)
}
#twikoo .tk-comments .el-button--primary {
  border-color: var(#272822);
  color: var(--anzhiyu-card-bg);
  border-radius: 12px;
  -webkit-box-shadow: var(--anzhiyu-shadow-black);
  box-shadow: var(--anzhiyu-shadow-black);
  -webkit-transition: .3s;
  -moz-transition: .3s;
  -o-transition: .3s;
  -ms-transition: .3s;
  transition: .3s;
  width: 6.25rem;
  position: absolute;
  top: -43px;
  right: 0;
  margin-left: .5rem!important;
  height: 32px
}
#twikoo .tk-comments .tk-input .el-textarea__inner {
  min-height: 130px!important;
  border-radius: 15px;
  display: block;
  resize: vertical;
  padding: 16px 16px 40px 16px;
  line-height: 1.5;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  width: 100%;
  font-size: inherit;
  color: var(#272822);
  background-color: var(--anzhiyu-secondbg);
  border: var(--style-border-always);
  -webkit-transition: border-color .2s cubic-bezier(.645,.045,.355,1);
  -moz-transition: border-color .2s cubic-bezier(.645,.045,.355,1);
  -o-transition: border-color .2s cubic-bezier(.645,.045,.355,1);
  -ms-transition: border-color .2s cubic-bezier(.645,.045,.355,1);
  transition: border-color .2s cubic-bezier(.645,.045,.355,1)
}
#twikoo .tk-comments .el-input__inner {
  background: var(--anzhiyu-secondbg)!important;
  border: none!important;
  color: var(#272822)!important;
  padding-left: 8px
}
#twikoo .tk-comments .el-input__inner:focus {
  border: none
}
#twikoo .tk-comments .el-input-group__append,#twikoo .tk-comments .el-input-group__prepend {
  background-color: var(--anzhiyu-card-bg);
  color: var(#272822);
  border-color: var(--anzhiyu-card-border);
  border: none;
  font-weight: 700
}
#twikoo .tk-comments .el-input-group--prepend .el-input__inner,#twikoo .tk-comments .el-input-group__append {
  border-radius: 12px
}
#twikoo .tk-comments .el-input--small .el-input__inner {
  padding: 8px;
  padding-left: 16px
}
#twikoo .tk-comments .el-input-group--prepend .el-input__inner,#twikoo .tk-comments .el-input-group__append {
  border-left-width: 0!important
}
#twikoo .tk-comments .tk-meta-input {
  position: relative;
  margin-top: 8px;
  width: calc(100% - 6.875rem)
}
#twikoo .tk-comments .tk-meta-input .el-input.el-input--small.el-input-group.el-input-group--prepend {
  border-radius: 12px;
  background: var(--anzhiyu-secondbg);
  border: var(--style-border-always)
}
#twikoo .tk-comments .tk-meta-input .el-input .el-input-group__prepend {
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  border-radius: 12px 0 0 12px
}
#twikoo .tk-comments .tk-meta-input .el-input--small.el-input-group.el-input-group--prepend:focus-within {
  border: var(--style-border-hover)
}
#twikoo .tk-comments .tk-row .tk-avatar {
  display: none
}
#twikoo .tk-comments .tk-row .tk-col {
  -webkit-box-direction: reverse;
  -moz-box-direction: reverse;
  -o-box-direction: reverse;
  -webkit-box-orient: vertical;
  -moz-box-orient: vertical;
  -o-box-orient: vertical;
  -webkit-flex-direction: column-reverse;
  -ms-flex-direction: column-reverse;
  flex-direction: column-reverse
}
#twikoo .tk-comments .tk-row.actions {
  margin-bottom: 0;
  margin-left: 0;
  margin-top: 0;
  -webkit-box-pack: distribute;
  -moz-box-pack: distribute;
  -o-box-pack: distribute;
  -ms-flex-pack: distribute;
  -webkit-justify-content: space-around;
  justify-content: space-around
}
#twikoo .tk-comments .tk-admin {
  backdrop-filter: blur(5px)
}
#twikoo .tk-comments .el-button {
  background-color: var(#272822);
  border: 0 solid var(--anzhiyu-main);
  color: var()
}
#twikoo .tk-comments .tk-tag-green {
  background-color: var(--anzhiyu-main);
  border-color: #0077ff;
  border-radius: 4px;
  color: #0077ff
}
#twikoo .tk-comments .tk-action-icon {
  color: var(--anzhiyu-main);
  cursor: pointer
}
#twikoo .tk-comments .tk-icon.__comments {
  color: var(--anzhiyu-main)
}
#twikoo .tk-comments .tk-nick {
  line-height: 40px
}
#twikoo .tk-comments .tk-extras {
  margin-top: .5rem;
  padding-bottom: .5rem
}
#twikoo .tk-comments .tk-expand:hover {
  color: #fff;
  background-color: var(--anzhiyu-main);
  border: var(--style-border-none)
}
#twikoo .tk-comments .tk-content p {
  margin: 0
}
#twikoo .tk-comments .tk-admin-config-input .el-input__inner {
  background: 0 0!important
}
#twikoo pre code {
  background: 0 0
}
#twikoo code {
  padding: 2px 4px;
  background: var(--anzhiyu-secondbg);
  color: #f47466
}
#twikoo .tk-comment .tk-submit .tk-avatar,#twikoo .tk-replies .tk-avatar {
  height: 2.5rem!important;
  width: 2.5rem!important
}
#twikoo .tk-comment pre {
  background: #272822;
  padding: 1em;
  margin: .5em 0;
  overflow: auto;
  border-radius: .3em
}
@media screen and (max-width: 768px) {
  #twikoo .tk-comments-container .tk-comment {
      padding:1rem;
      border: var(--style-border-always);
      -webkit-box-shadow: var(--anzhiyu-shadow-border);
      box-shadow: var(--anzhiyu-shadow-border);
      background: var(--anzhiyu-card-bg)
  }
  #twikoo .tk-replies .tk-comment {
      border: none
  }
}
#twikoo .tk-avatar {
  border-radius: 50px
}
#twikoo .tk-avatar .tk-avatar-img {
  height: 2.5rem!important
}
.tk-replies {
  max-height: 10rem!important
}
.tk-replies.tk-replies-expand {
  max-height: none!important
}
.tk-replies .tk-comment {
  border-top: var(--style-border-dashed);
  border-radius: 12px;
  padding: 1rem 0 0;
  margin-top: 0;
  -webkit-transition: all .3s ease 0s;
  -moz-transition: all .3s ease 0s;
  -o-transition: all .3s ease 0s;
  -ms-transition: all .3s ease 0s;
  transition: all .3s ease 0s
}
.tk-replies .tk-content span:first-child:not(.token) {
  font-size: .75rem;
  color: var(--anzhiyu-secondtext)
}
.tk-comments-container .tk-submit {
  opacity: 1;
  -ms-filter: none;
  filter: none;
  height: auto;
  overflow: visible
}
      //Twikoo样式美化👆
    `}</style>
  )
}

export { Style }
