import React from "react";

export default ({ gender, size, color }) => {
  if (color === "Red") color = "#F90";
  return gender === "Male" ? (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size / 2}
      height={size}
      fill="none"
      viewBox="0 0 21 42"
    >
      <path
        fill="#E5283E"
        d="M10.525.317l7.54 19.136c.03.076-.061.12-.127.07-1.07-.805-4.193-1.387-7.878-1.387-3.686 0-6.808.582-7.878 1.387-.066.05-.157.006-.127-.07L9.595.317a.5.5 0 01.93 0zM.501 34.83l1.452-3.015c.034 1.035.157 2.087.424 3.054.327-1.186 1.178-3.558 1.964-3.558-.327 1.525-.393 5.286 1.963 8.132.164-1.186.59-3.558.982-3.558.18 0 .18.204.178.562-.001.621-.004 1.706.93 2.996.194.3 1.015 1.487 1.655 2.408.64-.921 1.462-2.108 1.655-2.408.934-1.29.932-2.375.93-2.996 0-.358 0-.562.179-.562.392 0 .818 2.372.981 3.558 2.357-2.846 2.291-6.607 1.964-8.131.785 0 1.636 2.371 1.964 3.557.266-.967.39-2.02.423-3.054l1.453 3.016C21.196 38.15 18.777 42 15.093 42H5.006c-3.684 0-6.103-3.85-4.505-7.17z"
      ></path>
      <path
        stroke="#000"
        strokeOpacity="0.1"
        strokeWidth="0.5"
        d="M3.943 31.858c.022-.027.043-.052.064-.075-.237 1.79-.08 5.18 2.105 7.819l.362.438.078-.563c.081-.589.227-1.47.4-2.2.085-.357.174-.669.262-.89v.06c-.001.637-.003 1.785.974 3.137.185.286.884 1.297 1.487 2.166H5.006c-3.5 0-5.798-3.657-4.28-6.81l1.036-2.151c.066.73.184 1.458.374 2.146l.241.873.241-.873c.161-.584.451-1.459.795-2.182.172-.364.353-.676.53-.895zm3.418 4.254l-.003.004.003-.004zm6.626 3.49c2.185-2.64 2.342-6.03 2.105-7.82l.064.076c.177.219.357.531.53.895.343.724.633 1.598.795 2.182l.24.873.242-.873c.19-.688.308-1.415.374-2.147l1.035 2.151c1.519 3.154-.78 6.811-4.28 6.811h-4.668c.603-.868 1.301-1.88 1.487-2.166.977-1.352.975-2.5.973-3.138v-.06c.088.222.178.534.262.891.174.73.32 1.611.4 2.2l.079.563.362-.438zm-1.25-3.49l.004.004a.018.018 0 01-.003-.004zM10.293.408l7.344 18.641c-.624-.315-1.533-.574-2.612-.767-1.392-.25-3.11-.396-4.964-.396-1.855 0-3.572.146-4.964.396-1.08.193-1.988.452-2.613.767L9.827.409a.25.25 0 01.465 0z"
      ></path>
      <path
        fill={color}
        d="M2.442 19.354c1.26-.716 4.196-1.218 7.618-1.218 3.4 0 6.321.496 7.594 1.205l.068.282c.163.677.785 2.134 1.963 2.54 1.214.42-.906.493-1.964-.062.914.856 1.63 1.725 1.964 3.112l-.982-.508c.164.847.393 3.252 0 4.066 0-.848-.196-2.033-.981-2.033.327 1.694.785 5.285 0 8.13-.328-1.185-1.178-3.557-1.964-3.557.327 1.525.393 5.286-1.963 8.132-.164-1.186-.59-3.558-.982-3.558-.18 0-.18.204-.179.562.002.621.004 1.706-.93 2.996-.193.3-1.015 1.487-1.655 2.408-.64-.921-1.461-2.108-1.654-2.408-.935-1.29-.932-2.375-.93-2.996 0-.358 0-.562-.179-.562-.393 0-.818 2.372-.982 3.558-2.356-2.846-2.29-6.607-1.963-8.132-.786 0-1.636 2.372-1.964 3.558-.785-2.846-.327-6.437 0-8.131-.785 0-.982 1.186-.982 2.032-.392-.813-.163-3.218 0-4.065l-.981.508c.335-1.387 1.05-2.256 1.964-3.112-1.058.555-3.178.482-1.964.063 1.178-.407 1.8-1.864 1.963-2.541l.065-.269z"
      ></path>
      <path
        fill={color}
        d="M10.05 18.713c-.667-.81-2.6-1.861-5 .405-2.4 2.265-4.334 1.483-5 .809 1.5 1.753 5.6 4.207 10 0 4.4 4.207 8.5 1.753 10 0-.667.674-2.6 1.456-5-.81-2.4-2.265-4.334-1.213-5-.404z"
      ></path>
      <path
        stroke="#000"
        strokeOpacity="0.1"
        strokeWidth="0.5"
        d="M6.042 18.64c.978-.134 2.082-.22 3.26-.246.236.149.424.32.554.478l.193.234.193-.234c.131-.159.319-.33.555-.478 1.175.025 2.277.11 3.255.242.265.176.541.395.826.663 1.13 1.068 2.182 1.498 3.075 1.566.05.089.103.178.16.266l.024.036a6.309 6.309 0 01-2.043.749c-1.677.292-3.724-.116-5.872-2.17l-.173-.165-.172.165c-2.148 2.054-4.195 2.462-5.872 2.17a6.31 6.31 0 01-2.043-.749 4.704 4.704 0 00.184-.302c.892-.068 1.944-.498 3.075-1.566.283-.266.557-.484.821-.66zm-3.383.88c.525-.274 1.336-.523 2.362-.716a8.033 8.033 0 00-.143.132c-.93.877-1.77 1.269-2.473 1.393a4.49 4.49 0 00.215-.647l.04-.162zm12.562-.584a7.97 7.97 0 00-.149-.137c1.023.191 1.835.437 2.365.71l.042.173c.043.177.114.402.215.646-.703-.123-1.544-.515-2.473-1.392zm3.312 1.923s0 0 0 0c.038-.004.076-.008.113-.014-.027.02-.056.04-.084.058l-.03-.044zm-.69 1.023c.207-.096.406-.201.596-.312.221.258.485.492.793.664-.454-.038-1.006-.152-1.39-.352zm-1.663.526a6.653 6.653 0 001.652-.52l-.282.395c.765.717 1.37 1.426 1.73 2.438l-.462-.238-.458-.237.098.506a14.807 14.807 0 01.212 2.426c-.173-.368-.468-.69-.948-.69h-.303l.057.297c.292 1.51.681 4.508.208 7.12-.153-.447-.34-.931-.547-1.367-.179-.378-.38-.732-.593-.995-.202-.25-.468-.482-.786-.482h-.31l.066.303c.3 1.401.37 4.76-1.56 7.46a23.911 23.911 0 00-.321-1.663 7.182 7.182 0 00-.293-.98 1.587 1.587 0 00-.178-.34c-.058-.078-.173-.206-.35-.206a.39.39 0 00-.278.11.465.465 0 00-.122.23c-.029.125-.028.29-.028.448V36.45c.002.603.004 1.622-.882 2.846h0l-.008.011c-.17.265-.845 1.24-1.445 2.106-.6-.865-1.274-1.841-1.444-2.106h0l-.008-.011c-.886-1.224-.884-2.243-.883-2.846v-.002-.025c0-.157.001-.323-.028-.448a.464.464 0 00-.121-.23.39.39 0 00-.279-.11c-.176 0-.291.128-.35.206a1.592 1.592 0 00-.178.34 7.185 7.185 0 00-.292.98 23.953 23.953 0 00-.322 1.664c-1.93-2.7-1.86-6.06-1.559-7.461l.065-.303h-.31c-.318 0-.583.233-.785.482-.214.263-.414.617-.594.995-.206.436-.393.92-.546 1.366-.474-2.611-.084-5.609.208-7.119l.057-.297h-.303c-.48 0-.775.322-.948.69a14.804 14.804 0 01.212-2.426l.098-.506-.458.237-.462.238c.36-1.012.965-1.72 1.73-2.438l-.282-.396a6.653 6.653 0 001.652.521c1.8.314 3.939-.123 6.13-2.139 2.192 2.016 4.33 2.453 6.13 2.14zM1.66 21.57c.19.11.389.216.596.312-.383.2-.935.314-1.39.352a2.94 2.94 0 00.794-.664zm-.094-.71l-.029.043a7.285 7.285 0 01-.085-.057c.038.005.076.01.114.013 0 0 0 0 0 0z"
      ></path>
      <g filter="url(#filter0_d)">
        <path
          fill="#F7E3C5"
          d="M13.05 18.53c0 1.22-1.723 2.47-3 2.47-1.278 0-3-.828-3-2.47 0-.641 2.15-1.53 3-1.53.849 0 3 .889 3 1.53z"
        ></path>
      </g>
      <defs>
        <filter
          id="filter0_d"
          width="6"
          height="4.5"
          x="7.049"
          y="17"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          ></feColorMatrix>
          <feOffset dy="0.5"></feOffset>
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"></feColorMatrix>
          <feBlend
            in2="BackgroundImageFix"
            result="effect1_dropShadow"
          ></feBlend>
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow"
            result="shape"
          ></feBlend>
        </filter>
      </defs>
    </svg>
  ) : (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size / 2}
      height={size}
      fill="none"
      viewBox="0 0 21 42"
    >
      <path
        fill="#BAFFEE"
        fillRule="evenodd"
        d="M3.678 28.234L.5 34.83C-1.097 38.15 1.321 42 5.006 42h10.087c3.684 0 6.103-3.85 4.505-7.17l-3.136-6.512c-.149.098-.313.19-.494.274.472.69 1.039 2.379-.472 3.62.158.86.19 2.688-.944 3.101.315.517.944 1.758.944 2.585s.63 1.379.944 1.551c-.63 0-1.888-.207-1.888-1.034-.14.769-.255 2.222.257 2.528-.81-.251-2.018-1.015-1.673-2.528-.157.345-.66 1.034-1.416 1.034.315-.345.85-1.24.472-2.068-.472-1.034 0-1.55.944-2.068-.472-.69-1.227-2.275-.472-3.102-.63-.861-1.51-2.791 0-3.619-.944-.861-2.454-3.101-.944-5.17a17.095 17.095 0 01-1.25-1.775c-.475.697-.978 1.32-1.388 1.776 1.678 2.068 0 4.308-1.05 5.17 1.68.827.7 2.757 0 3.618.84.828 0 2.413-.524 3.102 1.05.517 1.574 1.034 1.05 2.068-.42.827.174 1.723.524 2.068-.84 0-1.399-.69-1.574-1.034.384 1.513-.958 2.277-1.858 2.528.57-.306.441-1.76.285-2.528 0 .827-1.398 1.034-2.098 1.034.35-.172 1.05-.724 1.05-1.55 0-.828.698-2.069 1.048-2.586-1.259-.413-1.224-2.24-1.049-3.102-1.678-1.24-1.049-2.93-.524-3.619a4.397 4.397 0 01-.684-.358zM5.65 40.943a3.165 3.165 0 01-.24.057c.091 0 .17-.02.24-.057zm9.16 0a.412.412 0 00.214.057 2.613 2.613 0 01-.215-.057z"
        clipRule="evenodd"
      ></path>
      <path
        fill="#BAFFEE"
        d="M18.114 19.453L10.574.317a.5.5 0 00-.93 0l-7.54 19.136c-.03.076.061.12.127.07 1.07-.805 4.193-1.387 7.878-1.387 3.686 0 6.808.582 7.878 1.387.066.05.157.006.127-.07zM6.277 34.839a.286.286 0 01.545 0 .286.286 0 00.272.197c.278 0 .393.356.169.519a.287.287 0 00-.104.32.286.286 0 01-.441.32.286.286 0 00-.337 0 .286.286 0 01-.44-.32.287.287 0 00-.105-.32.286.286 0 01.169-.519c.124 0 .234-.08.272-.197zM13.277 34.839a.286.286 0 01.545 0 .286.286 0 00.272.197c.278 0 .393.356.169.519a.286.286 0 00-.104.32.287.287 0 01-.441.32.286.286 0 00-.337 0 .287.287 0 01-.44-.32.286.286 0 00-.105-.32.286.286 0 01.168-.519c.125 0 .235-.08.273-.197z"
      ></path>
      <path
        stroke="#000"
        strokeOpacity="0.1"
        strokeWidth="0.5"
        d="M16.322 28.693l.034-.019 3.016 6.265c1.519 3.154-.78 6.811-4.28 6.811H5.007c-3.5 0-5.798-3.657-4.28-6.81l3.058-6.35c.066.036.135.073.206.108-.227.38-.43.91-.442 1.492-.014.71.257 1.477 1.065 2.126-.074.45-.106 1.077.015 1.665.11.53.353 1.067.84 1.384a.52.52 0 00.037.16 9.087 9.087 0 00-.453.86c-.221.485-.416 1.043-.416 1.513 0 .34-.143.63-.335.861a1.893 1.893 0 01-.574.466l.11.474c.367 0 .922-.053 1.395-.221.193-.069.394-.165.562-.298.02.22.03.448.02.663-.009.236-.04.444-.094.603-.05.145-.11.225-.169.265-.066.017-.13.032-.189.044l.049.495c.118 0 .23-.025.33-.073.472-.135 1.065-.404 1.499-.85.292-.3.509-.68.57-1.139a1.891 1.891 0 001.273.51h.608l-.434-.427a2.258 2.258 0 01-.492-.763c-.124-.329-.153-.682.015-1.014.287-.565.313-1.05.056-1.47-.197-.325-.544-.576-.957-.8.239-.358.498-.84.643-1.34.16-.55.198-1.187-.166-1.681.334-.453.697-1.106.815-1.77.067-.38.056-.778-.102-1.146a1.721 1.721 0 00-.613-.735c.496-.471 1.054-1.178 1.359-2.006.347-.942.365-2.048-.41-3.112.325-.37.693-.828 1.055-1.335.326.507.657.965.949 1.334-.702 1.065-.686 2.167-.375 3.105.276.832.783 1.543 1.233 2.015a1.7 1.7 0 00-.562.743c-.14.363-.15.756-.09 1.132.106.665.435 1.322.739 1.775-.334.493-.3 1.126-.156 1.674.1.381.26.752.425 1.066a.553.553 0 00-.146.487c-.239.175-.436.37-.563.603-.227.415-.206.89.05 1.452.155.337.128.699.015 1.03a2.298 2.298 0 01-.443.766l-.383.418h.567c.458 0 .83-.21 1.1-.452l.025-.023c.06.437.25.8.506 1.093.392.448.929.72 1.359.857.095.05.2.076.314.076l.054-.494a2.367 2.367 0 01-.16-.041c-.047-.038-.1-.115-.146-.262a2.435 2.435 0 01-.086-.61 5.73 5.73 0 01.016-.631c.141.113.305.2.467.263.431.17.937.224 1.271.224l.12-.47c-.274-.15-.814-.633-.814-1.33 0-.465-.173-1.02-.373-1.505a9.479 9.479 0 00-.47-.974c.508-.31.748-.888.85-1.444.11-.589.08-1.218.013-1.666.732-.653.972-1.42.96-2.12a3.328 3.328 0 00-.404-1.497zM6.116 35.492a5.08 5.08 0 01.026-.039l.186-.274h-.001a.535.535 0 00.188-.263c.004-.013.01-.017.012-.02a.041.041 0 01.022-.005.04.04 0 01.023.006c.003.002.008.006.012.019.072.22.278.37.51.37.014 0 .02.004.022.006a.04.04 0 01.013.02.04.04 0 01.001.023c0 .003-.003.01-.014.017a.536.536 0 00-.195.6c.004.013.002.02.001.023a.04.04 0 01-.014.018.04.04 0 01-.022.008c-.004 0-.01 0-.021-.008a.537.537 0 00-.63 0c-.012.008-.019.008-.022.008a.04.04 0 01-.022-.008.04.04 0 01-.014-.018c-.002-.003-.003-.01.001-.023a.537.537 0 00-.062-.46zm7.062.46a.537.537 0 00-.014-.368l.092-.052.243-.132-.157-.228-.002-.003a.535.535 0 00.175-.253c.004-.013.01-.017.012-.02a.041.041 0 01.022-.005.04.04 0 01.023.006c.003.002.008.006.012.019.072.22.278.37.51.37.014 0 .02.004.022.006a.04.04 0 01.013.02.04.04 0 01.001.023c0 .003-.003.01-.014.017a.537.537 0 00-.195.6c.004.013.002.02.001.023a.04.04 0 01-.014.018.04.04 0 01-.022.008c-.003 0-.01 0-.021-.008a.537.537 0 00-.63 0c-.012.008-.019.008-.022.008a.04.04 0 01-.022-.008.04.04 0 01-.014-.018c-.002-.003-.003-.01.001-.023zM10.342.408l7.344 18.641c-.625-.315-1.534-.574-2.613-.767-1.392-.25-3.109-.396-4.964-.396-1.855 0-3.572.146-4.964.396-1.079.193-1.988.452-2.612.767L9.877.409a.25.25 0 01.465 0z"
      ></path>
      <mask id="path-3-inside-1" fill="#fff">
        <path
          fillRule="evenodd"
          d="M10.526 18.138c2.059.025 3.92.232 5.314.555 2.027 2.371 3.627 1.345 4.21.451-1.366 2.42-4.991 5.764-8.966.756-.379-.477-.558-1.081-.558-1.69v-.072zm-6.298.591c1.381-.337 3.255-.556 5.338-.589-.042.728-.276 1.438-.745 1.998C4.922 24.8 1.392 21.524.05 19.144c.58.89 2.167 1.91 4.18-.415z"
          clipRule="evenodd"
        ></path>
      </mask>
      <path
        fill={color}
        fillRule="evenodd"
        d="M10.526 18.138c2.059.025 3.92.232 5.314.555 2.027 2.371 3.627 1.345 4.21.451-1.366 2.42-4.991 5.764-8.966.756-.379-.477-.558-1.081-.558-1.69v-.072zm-6.298.591c1.381-.337 3.255-.556 5.338-.589-.042.728-.276 1.438-.745 1.998C4.922 24.8 1.392 21.524.05 19.144c.58.89 2.167 1.91 4.18-.415z"
        clipRule="evenodd"
      ></path>
      <path
        fill="#000"
        fillOpacity="0.1"
        d="M10.526 18.138l.006-.5-.506-.006v.506h.5zm5.314.555l.38-.325-.107-.124-.16-.038-.113.487zm4.21.451l.435.246-.854-.519.418.273zm-8.966.756l.391-.311-.391.31zm-6.856-1.17l-.118-.487-.155.038-.105.12.378.328zm5.338-.59l.5.029.03-.537-.537.008.007.5zm-.745 1.998l-.383-.32.383.32zM.05 19.144l.42-.273-.855.519.435-.246zm10.47-.506c2.034.025 3.858.229 5.208.542l.226-.974c-1.438-.333-3.336-.543-5.421-.567l-.012 1zm4.94.38c1.076 1.258 2.13 1.716 3.076 1.623.922-.091 1.587-.693 1.933-1.224l-.837-.546c-.237.364-.664.722-1.194.775-.506.05-1.266-.165-2.217-1.278l-.76.65zm4.155-.12c-.654 1.159-1.82 2.477-3.223 2.934a3.264 3.264 0 01-2.242-.064c-.814-.312-1.718-.975-2.674-2.18l-.783.623c1.032 1.3 2.072 2.097 3.099 2.49a4.263 4.263 0 002.91.082c1.743-.568 3.072-2.132 3.784-3.393l-.871-.491zm-8.139.69c-.297-.374-.45-.864-.45-1.378h-1c0 .703.208 1.423.667 2l.783-.621zm-.45-1.378v-.072h-1v.072h1zm-6.678 1.005c1.335-.326 3.17-.543 5.227-.575l-.015-1c-2.11.033-4.023.255-5.45.603l.238.972zm4.858 1.244c.55-.658.814-1.477.86-2.29l-.998-.058c-.037.643-.242 1.244-.63 1.706l.768.642zm-9.591-1.07c.7 1.243 1.998 2.775 3.699 3.365.865.3 1.83.354 2.845.003 1.008-.35 2.031-1.084 3.047-2.298l-.767-.642c-.934 1.117-1.815 1.72-2.607 1.994a3.259 3.259 0 01-2.19-.002c-1.375-.477-2.514-1.772-3.156-2.91l-.871.49zm4.236-.987c-.942 1.089-1.694 1.295-2.196 1.243-.527-.055-.95-.412-1.186-.774l-.837.546c.344.528 1.004 1.126 1.919 1.222.94.099 1.987-.347 3.056-1.583l-.756-.654z"
        mask="url(#path-3-inside-1)"
      ></path>
      <mask id="path-5-inside-2" fill="#fff">
        <path
          fillRule="evenodd"
          d="M17.593 19.282c-.434-.222-1.03-.42-1.753-.589.764.894 1.468 1.305 2.079 1.423-.08-.291-.193-.571-.326-.834zm-7.484-1.146c-.182 0-.363.001-.543.004-.042.728-.276 1.438-.745 1.998-2.58 3.084-4.998 2.694-6.728 1.387.118.643.483 1.292 1.22 1.898-.874 1.206-1.888 3.929 1.049 5.17-.525.689-1.154 2.378.524 3.618-.165.813-.205 2.485.848 3.019a.281.281 0 01.27-.194c.125 0 .235-.08.273-.197a.286.286 0 01.545 0 .286.286 0 00.272.197c.278 0 .393.356.169.519a.287.287 0 00-.104.32.286.286 0 01-.441.32.286.286 0 00-.337 0 .286.286 0 01-.44-.32.287.287 0 00-.105-.32.306.306 0 01-.037-.032c-.368.593-.913 1.645-.913 2.375 0 .827-.699 1.379-1.049 1.551.7 0 2.098-.207 2.098-1.034.156.769.284 2.222-.285 2.528a3.165 3.165 0 01-.24.057c.091 0 .17-.02.24-.057.9-.251 2.242-1.015 1.858-2.528.175.345.735 1.034 1.574 1.034-.35-.345-.944-1.24-.525-2.068.525-1.034 0-1.55-1.049-2.068.525-.69 1.364-2.275.525-3.102.7-.861 1.678-2.791 0-3.619 1.049-.861 2.727-3.101 1.049-5.17.41-.454.914-1.078 1.388-1.775.428.697.881 1.32 1.25 1.776-1.51 2.068 0 4.308.944 5.17-1.51.827-.629 2.757 0 3.618-.667.731-.155 2.055.3 2.828a.309.309 0 01.04-.003c.125 0 .235-.08.273-.197a.286.286 0 01.545 0 .287.287 0 00.272.197c.278 0 .393.356.169.519a.286.286 0 00-.104.32.286.286 0 01-.441.32.286.286 0 00-.337 0 .287.287 0 01-.44-.32.286.286 0 00-.105-.32.296.296 0 01-.043-.039c-.708.458-1.011.966-.6 1.865.377.827-.158 1.723-.473 2.068.755 0 1.259-.69 1.416-1.034-.345 1.513.863 2.277 1.673 2.528a.412.412 0 00.215.057 2.61 2.61 0 01-.215-.057c-.512-.306-.397-1.76-.257-2.528 0 .827 1.259 1.034 1.888 1.034-.314-.172-.944-.724-.944-1.55 0-.828-.629-2.069-.944-2.586 1.133-.413 1.102-2.24.944-3.102 1.51-1.24.944-2.93.472-3.619 2.643-1.24 1.731-3.963.944-5.17.665-.606.994-1.257 1.099-1.9-1.774 1.342-4.273 1.722-6.927-1.622-.379-.477-.558-1.081-.558-1.69v-.072a35.892 35.892 0 00-.417-.002zm-5.88.593c-.71.174-1.29.378-1.7.605-.135.247-.25.508-.333.779.599-.12 1.286-.522 2.032-1.384z"
          clipRule="evenodd"
        ></path>
      </mask>
      <path
        fill={color}
        fillRule="evenodd"
        d="M17.593 19.282c-.434-.222-1.03-.42-1.753-.589.764.894 1.468 1.305 2.079 1.423-.08-.291-.193-.571-.326-.834zm-7.484-1.146c-.182 0-.363.001-.543.004-.042.728-.276 1.438-.745 1.998-2.58 3.084-4.998 2.694-6.728 1.387.118.643.483 1.292 1.22 1.898-.874 1.206-1.888 3.929 1.049 5.17-.525.689-1.154 2.378.524 3.618-.165.813-.205 2.485.848 3.019a.281.281 0 01.27-.194c.125 0 .235-.08.273-.197a.286.286 0 01.545 0 .286.286 0 00.272.197c.278 0 .393.356.169.519a.287.287 0 00-.104.32.286.286 0 01-.441.32.286.286 0 00-.337 0 .286.286 0 01-.44-.32.287.287 0 00-.105-.32.306.306 0 01-.037-.032c-.368.593-.913 1.645-.913 2.375 0 .827-.699 1.379-1.049 1.551.7 0 2.098-.207 2.098-1.034.156.769.284 2.222-.285 2.528a3.165 3.165 0 01-.24.057c.091 0 .17-.02.24-.057.9-.251 2.242-1.015 1.858-2.528.175.345.735 1.034 1.574 1.034-.35-.345-.944-1.24-.525-2.068.525-1.034 0-1.55-1.049-2.068.525-.69 1.364-2.275.525-3.102.7-.861 1.678-2.791 0-3.619 1.049-.861 2.727-3.101 1.049-5.17.41-.454.914-1.078 1.388-1.775.428.697.881 1.32 1.25 1.776-1.51 2.068 0 4.308.944 5.17-1.51.827-.629 2.757 0 3.618-.667.731-.155 2.055.3 2.828a.309.309 0 01.04-.003c.125 0 .235-.08.273-.197a.286.286 0 01.545 0 .287.287 0 00.272.197c.278 0 .393.356.169.519a.286.286 0 00-.104.32.286.286 0 01-.441.32.286.286 0 00-.337 0 .287.287 0 01-.44-.32.286.286 0 00-.105-.32.296.296 0 01-.043-.039c-.708.458-1.011.966-.6 1.865.377.827-.158 1.723-.473 2.068.755 0 1.259-.69 1.416-1.034-.345 1.513.863 2.277 1.673 2.528a.412.412 0 00.215.057 2.61 2.61 0 01-.215-.057c-.512-.306-.397-1.76-.257-2.528 0 .827 1.259 1.034 1.888 1.034-.314-.172-.944-.724-.944-1.55 0-.828-.629-2.069-.944-2.586 1.133-.413 1.102-2.24.944-3.102 1.51-1.24.944-2.93.472-3.619 2.643-1.24 1.731-3.963.944-5.17.665-.606.994-1.257 1.099-1.9-1.774 1.342-4.273 1.722-6.927-1.622-.379-.477-.558-1.081-.558-1.69v-.072a35.892 35.892 0 00-.417-.002zm-5.88.593c-.71.174-1.29.378-1.7.605-.135.247-.25.508-.333.779.599-.12 1.286-.522 2.032-1.384z"
        clipRule="evenodd"
      ></path>
      <path
        fill="#000"
        fillOpacity="0.1"
        d="M15.84 18.693l.113-.487a.5.5 0 00-.493.812l.38-.325zm1.753.589l.446-.226a.5.5 0 00-.219-.22l-.227.446zm.326.834l-.094.49a.5.5 0 00.576-.624l-.482.134zM9.566 18.14l-.007-.5a.5.5 0 00-.492.471l.5.03zm-.745 1.998l.384.321-.384-.32zm-6.728 1.387l.301-.399a.5.5 0 00-.793.49l.492-.09zm1.22 1.898l.405.293a.5.5 0 00-.088-.68l-.317.387zm1.049 5.17l.398.302a.5.5 0 00-.204-.763l-.194.46zm.524 3.618l.49.1a.5.5 0 00-.192-.502l-.298.402zm.848 3.019l-.226.446a.5.5 0 00.699-.284l-.473-.162zm.543-.391l-.476-.155.476.155zm.545 0l.475-.155-.475.155zm.44.716l.295.404-.294-.404zm-.103.32l-.476.154.476-.154zm-.441.32l.294-.404-.294.404zm-.337 0l-.294-.404.294.404zm-.44-.32l.475.154-.476-.154zm-.105-.32l.294-.405-.294.405zm-.037-.032l.354-.353a.5.5 0 00-.778.09l.424.263zM3.837 39.45l-.22-.448a.5.5 0 00.22.948v-.5zm2.098-1.034l.49-.1a.5.5 0 00-.99.1h.5zM5.411 41l-.097-.49a.5.5 0 00.097.99V41zm2.098-2.585l.445-.226a.5.5 0 00-.93.349l.484-.123zm1.573 1.034v.5a.5.5 0 00.35-.856l-.35.356zm-.525-2.068l-.446-.226.446.226zm-1.049-2.068l-.397-.303a.5.5 0 00.176.752l.221-.449zm.525-3.102l-.388-.315a.5.5 0 00.037.671l.35-.356zm0-3.619l-.317-.386a.5.5 0 00.096.835l.22-.449zm1.049-5.17l-.372-.334a.5.5 0 00-.016.65l.388-.315zm1.388-1.775l.427-.261a.5.5 0 00-.84-.02l.413.281zm1.25 1.776l.404.295a.5.5 0 00-.015-.61l-.389.315zm.944 5.17l.24.438a.5.5 0 00.097-.808l-.337.37zm0 3.618l.37.337a.5.5 0 00.034-.632l-.404.295zm.3 2.828l-.432.253a.5.5 0 00.498.243l-.067-.496zm.313-.2l-.475-.155.475.155zm.545 0l.476-.155-.476.155zm.44.716l.295.404-.294-.404zm-.103.32l.475-.154-.475.154zm-.441.32l.294-.404-.294.404zm-.337 0l-.294-.404.294.404zm-.44-.32l-.476-.154.475.154zm-.105-.32l-.294.404.294-.404zm-.043-.039l.365-.341a.5.5 0 00-.637-.078l.272.42zm-.6 1.865l.454-.208-.455.208zm-.473 2.068l-.369-.337a.5.5 0 00.37.837v-.5zm1.416-1.034l.488.111a.5.5 0 00-.943-.319l.455.208zM15.024 41v.5a.5.5 0 00.107-.988l-.107.488zm-.472-2.585h.5a.5.5 0 00-.992-.09l.492.09zm1.888 1.034v.5a.5.5 0 00.24-.938l-.24.438zm-1.888-4.136l-.171-.47a.5.5 0 00-.256.73l.427-.26zm.944-3.102l-.317-.386a.5.5 0 00-.175.476l.492-.09zm.472-3.619l-.212-.452a.5.5 0 00-.2.735l.412-.283zm.944-5.17l-.337-.369a.5.5 0 00-.081.643l.418-.273zm1.099-1.9l.493.08a.5.5 0 00-.795-.48l.302.4zM11.084 19.9l.391-.311-.391.31zm-.558-1.762h.5a.5.5 0 00-.494-.5l-.006.5zm-7.997 1.195l-.242-.437a.5.5 0 00-.197.198l.439.24zm1.7-.604l.377.327a.5.5 0 00-.496-.813l.118.486zm-2.033 1.384l-.478-.148a.5.5 0 00.575.638l-.097-.49zm13.53-.933c.703.163 1.256.351 1.64.547l.454-.89c-.484-.248-1.124-.458-1.867-.63l-.226.973zm2.287.445c-.464-.09-1.075-.416-1.793-1.257l-.76.65c.81.948 1.606 1.443 2.365 1.589l.188-.982zm-.867-.118c.12.238.22.487.29.742l.965-.267a5.033 5.033 0 00-.362-.926l-.893.451zm-7.572-.867c.177-.003.355-.004.535-.004v-1c-.185 0-.368.001-.55.004l.015 1zm-.37 1.82c.551-.659.815-1.478.861-2.291l-.998-.058c-.037.643-.242 1.244-.63 1.706l.768.642zm-7.412 1.464c.932.704 2.093 1.194 3.4 1.051 1.31-.142 2.668-.909 4.013-2.516l-.767-.642c-1.236 1.477-2.377 2.058-3.354 2.164-.98.107-1.892-.252-2.69-.855l-.602.798zm1.838 1.112c-.66-.542-.952-1.091-1.045-1.6l-.984.18c.142.774.58 1.524 1.395 2.193l.634-.773zm.926 5.096c-.663-.28-1.066-.628-1.306-.982a2.032 2.032 0 01-.342-1.158c-.003-.843.409-1.723.81-2.276l-.81-.587c-.473.653-1.005 1.738-1 2.868.003.576.145 1.17.514 1.715.369.543.94 1 1.745 1.341l.39-.921zm.628 3.677c-.709-.524-.896-1.102-.886-1.604.01-.534.248-1.029.462-1.31l-.796-.605a3.36 3.36 0 00-.666 1.895c-.016.825.321 1.711 1.291 2.428l.595-.804zm.776 2.975c-.32-.162-.524-.523-.614-1.044a4.153 4.153 0 01.03-1.43l-.98-.198a5.148 5.148 0 00-.035 1.798c.112.652.414 1.394 1.147 1.766l.452-.892zm.045-.248a.78.78 0 00-.744.532l.946.324a.219.219 0 01-.202.144v-1zm-.204.148a.213.213 0 01.204-.148v1c.34 0 .642-.219.748-.543l-.952-.309zm1.496 0c-.235-.725-1.26-.725-1.496 0l.952.309a.214.214 0 01-.407 0l.951-.309zm-.203-.148c.093 0 .175.06.203.148l-.95.309a.786.786 0 00.747.543v-1zm.463 1.423c.616-.448.3-1.423-.463-1.423v1a.214.214 0 01-.125-.386l.588.81zm.077-.239a.213.213 0 01-.077.24l-.588-.81a.786.786 0 00-.286.88l.951-.31zm-1.21.88c.616.448 1.446-.155 1.21-.88l-.95.31a.214.214 0 01.328-.24l-.588.81zm.251 0a.213.213 0 01-.251 0l.588-.81a.786.786 0 00-.925 0l.588.81zm-1.21-.88c-.236.725.594 1.328 1.21.88l-.588-.81a.214.214 0 01.329.24l-.951-.31zm.077.24a.213.213 0 01-.077-.24l.95.31a.786.786 0 00-.285-.88l-.588.81zm-.096-.083c.03.03.062.057.096.082l.588-.809a.193.193 0 01.023.02l-.707.707zm-.06 2.021c0-.262.104-.632.279-1.043.17-.4.385-.787.559-1.068l-.85-.528a9.17 9.17 0 00-.63 1.204c-.189.445-.358.967-.358 1.435h1zm-1.328 2c.233-.115.552-.338.82-.66.27-.324.508-.778.508-1.34h-1c0 .265-.11.5-.278.701-.17.205-.374.344-.492.402l.442.897zm1.377-1.483c0 .067-.048.212-.454.356-.365.13-.828.178-1.144.178v1c.384 0 .97-.055 1.479-.236.468-.166 1.12-.537 1.12-1.298h-1zm.451 2.968c.3-.16.458-.444.543-.694.088-.255.124-.543.135-.817a6.964 6.964 0 00-.139-1.556l-.98.198c.073.36.137.873.12 1.319a1.948 1.948 0 01-.081.532c-.046.132-.085.145-.07.137l.472.881zm-.37-.922c-.073.02-.14.036-.202.048l.193.981c.088-.017.181-.039.277-.066l-.269-.963zM5.41 41.5a.996.996 0 00.475-.117l-.473-.88a.03.03 0 01.007-.004l-.01.001v1zm1.613-2.962c.144.568-.027.963-.322 1.266-.317.326-.786.545-1.187.657l.27.963c.5-.14 1.151-.427 1.634-.923.506-.52.814-1.264.574-2.209l-.97.246zm2.058.411c-.276 0-.518-.112-.722-.277a1.628 1.628 0 01-.406-.483l-.891.452c.117.231.344.546.669.81.33.266.787.498 1.35.498v-1zm-.97-1.794c-.294.578-.22 1.163-.049 1.618.17.449.45.818.668 1.032l.702-.712a2.01 2.01 0 01-.434-.674c-.108-.286-.122-.562.004-.812l-.892-.452zm-.825-1.393c.522.257.794.462.909.651.077.128.129.322-.085.742l.892.452c.312-.613.363-1.195.047-1.714-.278-.457-.793-.769-1.32-1.028l-.443.897zm.395-3.195c.22.217.273.58.12 1.107-.149.51-.454 1.025-.691 1.336l.795.606c.288-.378.664-1 .856-1.662.188-.644.241-1.488-.378-2.099l-.702.712zm.13-3.526c.327.161.487.354.568.542.084.196.102.437.052.719-.102.579-.467 1.2-.787 1.594l.776.63c.379-.466.853-1.242.996-2.05.072-.412.064-.862-.118-1.287-.186-.435-.533-.793-1.045-1.045l-.442.897zm.882-5.303c.707.872.709 1.756.417 2.55-.302.82-.92 1.527-1.395 1.918l.634.773c.573-.47 1.32-1.315 1.7-2.346.389-1.06.39-2.33-.58-3.525l-.776.63zm1.363-2.372a16.73 16.73 0 01-1.347 1.722l.743.67c.425-.471.942-1.113 1.43-1.83l-.826-.563zm2.052 1.742a16.6 16.6 0 01-1.212-1.722l-.853.523c.44.716.906 1.357 1.288 1.829l.777-.63zM13 28.223c-.424-.387-.98-1.093-1.254-1.92-.268-.808-.263-1.71.377-2.585l-.807-.59c-.87 1.191-.866 2.444-.52 3.49.34 1.024 1.01 1.87 1.53 2.344l.674-.739zm.067 3.693c-.287-.393-.619-1.017-.712-1.605-.046-.29-.03-.54.05-.745.074-.195.218-.382.498-.535l-.48-.877c-.475.26-.787.625-.952 1.052-.16.416-.168.857-.104 1.261.127.8.55 1.57.893 2.04l.807-.59zm.326 2.87c-.21-.358-.423-.828-.51-1.273-.089-.455-.027-.771.15-.965l-.739-.674c-.49.538-.506 1.249-.393 1.831.117.594.386 1.172.63 1.587l.862-.506zm-.39-.25a.81.81 0 00-.107.008l.133.99a.19.19 0 01-.025.002v-1zm-.202.148a.214.214 0 01.203-.148v1c.34 0 .642-.219.747-.543l-.95-.309zm1.495 0c-.235-.725-1.26-.725-1.495 0l.95.309a.213.213 0 01-.406 0l.951-.309zm-.203-.148c.093 0 .175.06.204.148l-.952.309a.787.787 0 00.748.543v-1zm.463 1.423c.616-.448.3-1.423-.463-1.423v1a.214.214 0 01-.125-.386l.588.81zm.077-.239a.213.213 0 01-.077.24l-.588-.81a.786.786 0 00-.286.88l.951-.31zm-1.21.88c.616.448 1.446-.155 1.21-.88l-.95.31a.213.213 0 01.328-.24l-.588.81zm.251 0a.213.213 0 01-.251 0l.588-.81a.786.786 0 00-.925 0l.588.81zm-1.21-.88c-.236.725.594 1.328 1.21.88l-.588-.81a.214.214 0 01.329.24l-.951-.31zm.077.24a.213.213 0 01-.077-.24l.95.31a.787.787 0 00-.285-.88l-.588.81zm-.114-.102a.803.803 0 00.114.101l.588-.809a.193.193 0 01.028.025l-.73.683zm.22 1.316c-.173-.377-.157-.584-.107-.713.056-.148.2-.316.523-.525l-.543-.84c-.385.25-.745.564-.915 1.009-.177.464-.107.96.132 1.484l.91-.416zm-.558 2.612c.197-.216.449-.585.6-1.03.151-.447.215-1.017-.043-1.583l-.91.416c.12.261.105.553.005.846a2.05 2.05 0 01-.39.677l.738.674zm.591-1.579c-.053.117-.18.318-.362.482-.18.162-.382.26-.599.26v1c.538 0 .967-.247 1.267-.516.296-.266.5-.583.604-.81l-.91-.416zm2.276 2.258c-.348-.108-.76-.322-1.042-.642-.261-.3-.426-.707-.291-1.297l-.975-.222c-.21.923.056 1.654.514 2.177.44.503 1.036.796 1.498.94l.296-.956zm-.404.907a.912.912 0 00.471.128v-1c.001 0 .007 0 .016.003a.1.1 0 01.025.01l-.512.86zm.578-.86a2.146 2.146 0 01-.174-.047l-.296.955c.089.028.175.05.256.068l.214-.976zm-1.07-2.187c-.075.407-.144 1-.125 1.545.01.271.042.555.12.805.073.239.213.528.497.697l.512-.859c.028.017-.01.01-.054-.133a2.192 2.192 0 01-.075-.545c-.016-.451.042-.969.108-1.33l-.984-.18zm2.38.624c-.276 0-.681-.047-.997-.172-.334-.132-.392-.266-.392-.362h-1c0 .731.572 1.114 1.025 1.292.47.186 1.01.242 1.363.242v-1zm-1.445-1.05c0 1.085.809 1.772 1.204 1.989l.48-.877c-.233-.129-.684-.544-.684-1.113h-1zm-.87-2.326c.145.239.368.655.554 1.106.191.465.316.907.316 1.22h1c0-.516-.19-1.108-.391-1.6a9.486 9.486 0 00-.626-1.246l-.854.52zm.879-3.272c.07.39.111.998.011 1.538-.103.558-.322.89-.635 1.005l.343.939c.82-.3 1.15-1.087 1.276-1.762.128-.692.074-1.427-.012-1.9l-.983.18zm.55-3.426c.193.28.411.781.42 1.329.01.523-.168 1.105-.796 1.62l.635.774c.882-.725 1.176-1.608 1.162-2.412a3.564 3.564 0 00-.595-1.876l-.825.565zm.939-5.18c.36.553.736 1.44.733 2.298a2.24 2.24 0 01-.312 1.177c-.216.355-.575.696-1.16.97l.426.905c.737-.346 1.256-.81 1.587-1.354.33-.54.456-1.128.459-1.694.004-1.116-.47-2.193-.896-2.848l-.837.547zm1.023-2.254c-.085.523-.353 1.075-.942 1.612l.674.739c.741-.676 1.13-1.426 1.255-2.19l-.987-.161zm-6.825-1.23c1.378 1.736 2.773 2.576 4.12 2.753 1.348.178 2.545-.32 3.5-1.044l-.603-.797c-.818.619-1.757.982-2.766.85-1.01-.133-2.191-.776-3.468-2.384l-.783.622zm-.666-2c0 .703.207 1.422.666 2l.783-.622c-.297-.375-.45-.865-.45-1.379h-1zm0-.073v.072h1v-.072h-1zm.083.498c.138 0 .275 0 .41.002l.013-1-.423-.002v1zm-7.34 1.135c.357-.196.889-.388 1.578-.556l-.237-.972c-.73.179-1.357.396-1.823.653l.483.875zm-.096.489c.073-.235.173-.465.294-.687l-.877-.479a4.736 4.736 0 00-.372.871l.955.295zm1.177-1.858c-.7.808-1.296 1.13-1.752 1.22l.195.98c.743-.147 1.521-.63 2.313-1.546l-.756-.654z"
        mask="url(#path-5-inside-2)"
      ></path>
      <g filter="url(#filter0_d)">
        <path
          fill="#F6E3C5"
          d="M12.05 21.148c0 .915-1.149 1.852-2 1.852-.852 0-2-.62-2-1.852 0-.481 1.433-1.148 2-1.148.566 0 2 .667 2 1.148z"
        ></path>
      </g>
      <defs>
        <filter
          id="filter0_d"
          width="4"
          height="3.5"
          x="8.049"
          y="20"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          ></feColorMatrix>
          <feOffset dy="0.5"></feOffset>
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"></feColorMatrix>
          <feBlend
            in2="BackgroundImageFix"
            result="effect1_dropShadow"
          ></feBlend>
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow"
            result="shape"
          ></feBlend>
        </filter>
      </defs>
    </svg>
  );
};
