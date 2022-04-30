import React, { useRef, useState } from 'react'

import * as S from './styles'

/**
 * Props para o componente FileInput
 */
export type FileInputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  /**
   * Texto descritivo
   */
  description?: string
  /**
   * Texto de apoio extra
   */
  sub?: string
  /**
   * Função executada quando um arquivo é anexado
   */
  onAdd: (files: FileList | null) => void
}

/**
 * Espaço para fazer upload de arquivos
 */
export const FileInput = ({
  description,
  sub,
  onAdd,
  ...props
}: FileInputProps) => {
  const [isOver, setIsOver] = useState(false)
  const [added, setAdded] = useState<FileList | null>(null)
  const inputFile = useRef<HTMLInputElement>(null)

  const handleDragOver = (event: React.DragEvent) => {
    event.preventDefault()
    setIsOver(true)
  }

  const handleDragLeave = () => setIsOver(false)

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault()

    setIsOver(false)
    setAdded(event.dataTransfer.files)
    onAdd(event.dataTransfer.files)

    if (inputFile.current) {
      inputFile.current.files = event.dataTransfer.files
    }
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsOver(false)
    setAdded(event.target.files)
    onAdd(event.target.files)
  }

  const handleDelete = () => {
    setIsOver(false)
    setAdded(null)
    onAdd(null)

    if (inputFile.current) {
      inputFile.current.value = ''
      inputFile.current.files = null
    }
  }

  const fileName = added ? added[0].name.split('.') : ['']

  return (
    <S.Wrapper
      added={!!added}
      over={isOver}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
      onClick={() => !added && inputFile.current?.click()}
    >
      <input
        {...props}
        type="file"
        hidden
        ref={inputFile}
        onChange={handleChange}
      />

      {added ? (
        <>
          <S.IconDelete onClick={handleDelete}>
            <svg
              width="48"
              height="48"
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 24C0 10.7452 10.7452 0 24 0C37.2548 0 48 10.7452 48 24C48 37.2548 37.2548 48 24 48C10.7452 48 0 37.2548 0 24Z"
                fill="currentColor"
                fillOpacity="0.1"
              />
              <path
                d="M23.9978 13.9533C22.8928 13.9533 21.9978 14.8483 21.9978 15.9533H16.9978C16.4458 15.9533 15.9978 16.4013 15.9978 16.9533C15.9978 17.5053 16.4458 17.9533 16.9978 17.9533H30.9978C31.5498 17.9533 31.9978 17.5053 31.9978 16.9533C31.9978 16.4013 31.5498 15.9533 30.9978 15.9533H25.9978C25.9978 14.8483 25.1028 13.9533 23.9978 13.9533ZM16.9978 19.9532V29.9532C16.9978 32.1432 18.8028 33.9222 20.9978 33.9222L27.0288 33.9532C29.2238 33.9532 30.9978 32.1482 30.9978 29.9532V19.9532H16.9978ZM21.9978 22.9532C22.5498 22.9532 22.9978 23.4012 22.9978 23.9532V29.9532C22.9978 30.5052 22.5498 30.9532 21.9978 30.9532C21.4458 30.9532 20.9978 30.5052 20.9978 29.9532V23.9532C20.9978 23.4012 21.4458 22.9532 21.9978 22.9532ZM25.9978 22.9532C26.5498 22.9532 26.9978 23.4012 26.9978 23.9532V29.9532C26.9978 30.5052 26.5498 30.9532 25.9978 30.9532C25.4458 30.9532 24.9978 30.5052 24.9978 29.9532V23.9532C24.9978 23.4012 25.4458 22.9532 25.9978 22.9532Z"
                fill="currentColor"
              />
            </svg>
          </S.IconDelete>

          <svg
            fill="none"
            width="200"
            height="160"
            viewBox="0 0 200 135"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M100.119 123.983c32.322 0 58.525-26.204 58.525-58.641s-26.319-58.64-58.525-58.64c-32.322 0-58.525 26.203-58.525 58.64s26.203 58.641 58.525 58.641ZM166.074 46.762a4.733 4.733 0 1 0 0-9.466 4.733 4.733 0 0 0 0 9.466ZM173 28.293a3.232 3.232 0 1 0 0-6.464 3.232 3.232 0 0 0 0 6.464ZM44.249 26.902a3.232 3.232 0 1 0 0-6.464 3.232 3.232 0 0 0 0 6.464ZM24.51 89.237a6.003 6.003 0 1 0 0-12.005 6.003 6.003 0 0 0 0 12.005Z"
              fill="#373951"
            />
            <g filter="url(#a)">
              <path
                d="m84.066 96.64-46.39 9.516c-.678.106-1.3-.247-1.406-.925L22.124 35.982c-.105-.678.247-1.3.925-1.405l46.39-9.517c.678-.105 1.3.247 1.405.925l14.223 69.246c.101.603-.323 1.304-1.001 1.409Z"
                fill="#5C6479"
              />
            </g>
            <path
              d="m34.89 69.368 18.15-3.73M58.451 64.542l3.986-.819M67.278 62.724l3.986-.819M35.892 74.28l18.151-3.73M59.45 69.382l3.99-.747M68.209 67.639l3.986-.819M36.891 79.12l18.151-3.73M60.453 74.294l3.986-.819M69.208 72.479l3.986-.819M37.89 83.96l18.155-3.658M40.708 97.626l5.124-1.083M39.98 94.067l9.113-1.83M67.98 90.558l9.04-1.828M61.453 79.134l3.986-.819M70.21 77.391l3.987-.819"
              stroke="#474E61"
              strokeWidth="2"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M41.023 43.026c-1.563.33-2.653 1.663-2.833 3.29-.056.357.201.648.542.715.34.066.61-.198.666-.555.104-1.058.889-1.982 1.89-2.193 1-.21 2.076.254 2.611 1.247.195.304.55.437.834.239.285-.198.403-.568.208-.873-.834-1.482-2.355-2.198-3.918-1.87ZM55.365 40.01c-1.563.329-2.653 1.663-2.833 3.29-.056.357.202.648.542.715.34.066.611-.198.666-.555.104-1.058.89-1.983 1.89-2.193 1-.21 2.076.254 2.611 1.247.195.304.55.437.834.239.285-.198.403-.569.208-.873-.834-1.482-2.355-2.198-3.918-1.87ZM45.838 48.45l.904-.196c1.128 1.5 3.28 1.687 4.696.504.565-.414 1-1.092 1.141-1.778l.903-.197c-.294 2.321-2.553 3.979-4.82 3.6a4.277 4.277 0 0 1-2.824-1.932Z"
              fill="#989FB0"
            />
            <circle
              opacity=".4"
              cx="60.377"
              cy="48.584"
              r="2.443"
              transform="rotate(-11.876 60.377 48.584)"
              fill="#474E61"
            />
            <circle
              opacity=".4"
              cx="39.888"
              cy="52.893"
              r="2.443"
              transform="rotate(-11.876 39.888 52.893)"
              fill="#474E61"
            />
            <g filter="url(#b)">
              <path
                d="m128.239 116.297-51.18 2.997c-.738.077-1.308-.501-1.384-1.239l-4.458-76.278c-.077-.738.501-1.308 1.24-1.385l51.179-2.997c.739-.076 1.309.502 1.385 1.24l4.458 76.278c-.005.737-.501 1.308-1.24 1.384Z"
                fill="#5C6479"
              />
            </g>
            <path
              d="m93.653 81.409 24.579-1.435M93.405 76.927l24.509-1.435M93.901 85.89l24.579-1.434M82.665 90.99l36.064-2.123M82.913 95.472l20.618-1.253M83.8 110.447l5.113-.313M83.616 106.946l9.033-.565M110.716 105.319l8.963-.496"
              stroke="#474E61"
              strokeWidth="2"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M90.181 86.844c-.07 0-.14 0-.14-.07l-1.17-2.53-4.409.251-.86 2.655a.15.15 0 0 1-.14.14l-.91.063c-.07 0-.14 0-.14-.07-.07-.071-.07-.071.001-.14l3.151-9.573c0-.07.071-.14.141-.14l1.26-.06c.07 0 .14 0 .14.07l4.267 9.132v.14c-.001.07-.071.07-.141.07l-1.05.062Zm-5.43-3.537 3.57-.187-2.065-4.565-1.505 4.752Z"
              fill="#474E61"
            />
            <path
              d="M107.416 54.39c1.074-.069 1.936-1.048 1.867-2.122-.068-1.074-1.048-1.936-2.122-1.867-1.074.068-1.935 1.047-1.867 2.121.074 1.151.971 1.941 2.122 1.867ZM91.903 55.404c1.074-.069 1.936-1.048 1.867-2.122-.068-1.074-1.047-1.936-2.121-1.867-1.074.069-1.936 1.048-1.868 2.122.15 1.146 1.048 1.936 2.122 1.867ZM96.479 58.988c.188 1.774 1.663 3.109 3.373 3.013 1.709-.097 3.025-1.59 3.012-3.373l-6.385.36Z"
              fill="#989FB0"
            />
            <circle
              opacity=".4"
              cx="111.544"
              cy="61.097"
              r="2.642"
              transform="rotate(-3.225 111.544 61.097)"
              fill="#474E61"
            />
            <circle
              opacity=".4"
              cx="88.93"
              cy="62.371"
              r="2.642"
              transform="rotate(-3.225 88.93 62.371)"
              fill="#474E61"
            />
            <g filter="url(#c)">
              <path
                d="M179.543 82.758 133.63 94.249c-.662.182-1.309-.213-1.49-.875l-17.146-68.539c-.182-.661.213-1.308.875-1.49l45.913-11.49c.662-.183 1.308.213 1.49.874l17.146 68.54c.182.66-.213 1.307-.875 1.489Z"
                fill="#5C6479"
              />
            </g>
            <path
              d="m127.233 52.617 5.691 22.708 37.153-9.31-5.691-22.71-37.153 9.312ZM135.54 85.566l5.23-1.283M134.584 81.96l9.277-2.335M163.332 77.064l9.277-2.335M136.311 50.418l5.678 22.697M145.794 48.002l5.747 22.669M155.374 45.627l5.678 22.696M128.715 58.382l37.107-9.336M130.094 64.053l37.134-9.268M131.568 69.765l37.107-9.337"
              stroke="#474E61"
              strokeWidth="2"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M134.142 28.48c-1.862.451-3.122 2.091-3.28 4.048-.053.43.266.77.676.838.411.068.726-.259.78-.689.087-1.273.994-2.41 2.187-2.698 1.192-.288 2.5.23 3.177 1.401.245.358.675.505 1.009.257.334-.248.463-.696.218-1.054-1.053-1.748-2.904-2.552-4.767-2.102ZM146.692 25.447c-1.707.413-2.837 2.02-2.945 3.966a.787.787 0 0 0 .639.847c.379.075.664-.244.705-.671.056-1.265.87-2.38 1.963-2.644 1.093-.265 2.308.276 2.955 1.455.231.361.63.515.934.275a.787.787 0 0 0 .181-1.045c-1.004-1.76-2.724-2.596-4.432-2.183ZM144.042 39.73a2.093 2.093 0 1 0-.983-4.07 2.093 2.093 0 0 0 .983 4.07Z"
              fill="#989FB0"
            />
            <defs>
              <filter
                id="a"
                x=".105"
                y="14.042"
                width="106.976"
                height="125.133"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dy="11" />
                <feGaussianBlur stdDeviation="11" />
                <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.27 0" />
                <feBlend
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_1964_6648"
                />
                <feBlend
                  in="SourceGraphic"
                  in2="effect1_dropShadow_1964_6648"
                  result="shape"
                />
              </filter>
              <filter
                id="b"
                x="49.21"
                y="26.389"
                width="102.269"
                height="125.912"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dy="11" />
                <feGaussianBlur stdDeviation="11" />
                <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.27 0" />
                <feBlend
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_1964_6648"
                />
                <feBlend
                  in="SourceGraphic"
                  in2="effect1_dropShadow_1964_6648"
                  result="shape"
                />
              </filter>
              <filter
                id="c"
                x="92.949"
                y=".81"
                width="109.513"
                height="126.484"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dy="11" />
                <feGaussianBlur stdDeviation="11" />
                <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.27 0" />
                <feBlend
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_1964_6648"
                />
                <feBlend
                  in="SourceGraphic"
                  in2="effect1_dropShadow_1964_6648"
                  result="shape"
                />
              </filter>
            </defs>
          </svg>
        </>
      ) : (
        <svg
          fill="none"
          width="200"
          height="160"
          viewBox="0 0 220 170"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#a)">
            <path
              d="m124.279 47.762-18.036 23.324c-.566.85-1.7.944-2.549.283L81.22 53.711c-.85-.567-.945-1.7-.284-2.55l23.419-29.745c.566-.85 1.699-.944 2.549-.283l16.336 12.842 1.039 13.787Z"
              fill="#5C6479"
            />
          </g>
          <path
            d="m116.63 36.525-10.859-8.498c-.189-.19-.283-.473-.094-.85.188-.19.472-.284.849-.095l10.86 8.499c.189.189.283.472.094.85-.283.283-.566.283-.85.094ZM107.943 33.881l-4.061-3.305c-.188-.189-.283-.472-.094-.85.189-.283.472-.283.85-.094l4.06 3.305c.189.189.284.472.095.85-.284.283-.661.283-.85.094ZM123.24 33.976l-5.005 6.326c-.755.945-.472 2.267.378 2.928l5.76 4.532M117.291 49.179l-5.665-4.344-5.855-4.627-5.382-4.25c-.567-.471-1.511-.377-1.983.284l-7.744 9.82c-.472.567-.377 1.511.19 1.983l16.996 13.41c.567.471 1.511.377 1.983-.284l7.744-9.82c.472-.85.377-1.606-.284-2.172Zm-17.941-.095 1.7-2.266 5.193 4.06-1.7 2.267-5.193-4.06Zm4.721 4.722-1.605 2.077-5.194-4.06 1.606-2.078 5.193 4.06Zm4.438-5.76-1.699 2.266-5.194-4.06 1.7-2.267 5.193 4.06Zm-4.721-4.722 1.889-2.266 5.193 4.06-1.7 2.267-5.382-4.06Zm9.443 11.992-5.76-4.532 1.699-2.266 5.761 4.532-1.7 2.267Zm-12.276-9.631-5.571-4.344 1.7-2.266 5.571 4.343-1.7 2.267Zm-6.138-3.683 5.572 4.344-1.7 2.266-5.571-4.344 1.7-2.266ZM107 51.445l5.76 4.532-1.7 2.267-5.76-4.533 1.7-2.266Zm9.915-.755-1.417 1.794-5.76-4.533 1.7-2.266 5.288 4.155c.377.188.377.566.189.85ZM99.822 36.43l5.099 4.061-1.7 2.267-5.57-4.344 1.416-1.794c.188-.284.566-.284.755-.19Zm-8.499 10.01 1.228-1.51 5.571 4.343-1.605 2.077-5.194-4.06c-.188-.189-.188-.66 0-.85Zm17.092 14.07-5.288-4.155 1.605-2.077 5.76 4.532-1.322 1.606c-.188.377-.566.377-.755.094Z"
            fill="#2E3746"
          />
          <path
            d="M168.232 62.663H66.527c-2.092 0-3.922 1.83-3.922 3.923v65.646c0 2.092 1.83 1.308 3.922 1.308H167.97c2.091 0 3.922.784 3.922-1.308V66.586c.261-2.093-1.569-3.923-3.661-3.923Z"
            fill="#262A31"
          />
          <path
            d="M164.814 66.478h-94.65c-1.946 0-3.65 1.639-3.65 3.512v58.769c0 1.873 1.704 1.17 3.65 1.17h94.407c1.947 0 3.65.703 3.65-1.17v-58.77c.243-1.873-1.46-3.511-3.407-3.511Z"
            fill="#474E61"
          />
          <path
            d="M187.318 129.878v2.092c0 2.354-2.091 4.446-4.444 4.446H51.885c-2.353 0-4.445-2.092-4.445-4.446v-2.092h139.878Z"
            fill="#353B4A"
          />
          <path
            d="M129.537 129.878v.785c0 1.307-1.046 2.615-2.615 2.615h-19.347c-1.307 0-2.615-1.046-2.615-2.615v-.785h24.577Z"
            fill="#262A31"
          />
          <path
            d="M127.707 96.924h-8.628v-8.63c0-1.046-.784-1.831-1.83-1.831s-1.83.785-1.83 1.83v8.631h-8.628c-1.046 0-1.831.785-1.831 1.831 0 1.046.785 1.831 1.831 1.831h8.628v8.631c0 1.046.784 1.831 1.83 1.831s1.83-.785 1.83-1.831v-8.631h8.628c1.046 0 1.83-.785 1.83-1.83 0-1.047-.784-1.832-1.83-1.832Z"
            fill="#8E96AB"
          />
          <g filter="url(#b)">
            <path
              d="m187.064 96.016-28.924 15.657a3.441 3.441 0 0 1-4.66-1.385l-14.948-27.696a3.45 3.45 0 0 1 1.386-4.665l28.923-15.657a3.442 3.442 0 0 1 4.66 1.385l14.967 27.698a3.45 3.45 0 0 1-1.404 4.663Z"
              fill="url(#c)"
            />
          </g>
          <path
            d="M183.225 92.735 157.794 106.5c-.712.393-1.605.116-1.997-.596l-12.359-22.901c-.392-.713-.115-1.607.597-2l25.431-13.765c.712-.392 1.605-.116 1.997.597l12.358 22.901c.392.713.116 1.606-.596 2Z"
            fill="#5B6379"
          />
          <path
            d="m166.339 90.673-9.285 5.023 1.791-7.767 7.494 2.744Z"
            fill="#474E61"
          />
          <path
            d="m174.015 86.513-13.365 7.243 2.585-11.18 10.78 3.937Z"
            fill="#2E3746"
          />
          <path
            d="M155.507 86.848a1.993 1.993 0 1 0 .44-3.963 1.993 1.993 0 0 0-.44 3.963Z"
            fill="#474E61"
          />
          <g filter="url(#d)">
            <path
              d="m190.234 101.979-32.884.65a3.44 3.44 0 0 1-3.505-3.368l-.583-31.466a3.45 3.45 0 0 1 3.37-3.51l32.884-.651a3.441 3.441 0 0 1 3.505 3.368l.599 31.477a3.451 3.451 0 0 1-3.386 3.5Z"
              fill="url(#e)"
            />
          </g>
          <path
            d="m188.327 97.302-28.912.57c-.813.023-1.479-.632-1.501-1.445l-.48-26.019c-.022-.813.634-1.48 1.446-1.503l28.912-.57c.813-.023 1.479.633 1.501 1.446l.481 26.018c.021.813-.634 1.48-1.447 1.503Z"
            fill="#5B6379"
          />
          <path
            d="m174.267 87.727-10.555.206 5.153-6.082 5.402 5.876Z"
            fill="#354156"
          />
          <path
            d="m182.996 87.55-15.199.308 7.424-8.75 7.775 8.443Z"
            fill="#2E3746"
          />
          <path
            d="M166.395 79.36c.915.61 2.153.361 2.763-.556a1.993 1.993 0 1 0-2.763.556Z"
            fill="#354156"
          />
          <path
            d="m190.569 103.147-6.975 2.151 5.555 8.216-4.527 3.061-5.555-8.216-4.594 5.672-3.97-23.215 20.066 12.331Z"
            fill="#8E96AB"
          />
          <g filter="url(#f)">
            <path
              d="m52.39 67.95 17.7 19.785c.595.685.412 1.789-.373 2.491l-22.418 20.049c-.785.703-1.914.717-2.482.064l-22.39-25.767c-.595-.684-.412-1.788.373-2.49l16.242-14.526 13.348.394Z"
              fill="#5C6479"
            />
          </g>
          <path
            d="m38.247 66.695 5.085 6.006c.714.844 2.028.89 2.872.176l5.33-4.514"
            fill="#2E3746"
          />
          <g clipPath="url(#g)" fill="#2E3746">
            <path d="m33.407 71.317-1.297 1.097.755.891 1.296-1.097-.755-.891ZM35.47 71.1l-1.296 1.097.754.891 1.297-1.097-.755-.891ZM34.905 73.086l-1.297 1.098.755.891 1.296-1.097-.754-.892ZM36.968 72.87l-1.296 1.097.754.891 1.297-1.098-.755-.89ZM36.414 74.869l-1.297 1.097.755.892 1.296-1.098-.754-.891ZM38.477 74.652l-1.296 1.097.754.891 1.297-1.097-.755-.891ZM37.912 76.638l-1.296 1.098.754.891 1.297-1.097-.755-.892ZM39.976 76.421l-1.297 1.098.755.891 1.296-1.097-.754-.892ZM39.421 78.42l-1.296 1.098.754.892 1.297-1.098-.755-.891ZM41.485 78.204 40.188 79.3l.755.891 1.296-1.097-.754-.891ZM40.92 80.19l-1.297 1.098.755.891 1.296-1.097-.754-.891ZM42.983 79.974l-1.296 1.097.754.891 1.297-1.097-.755-.891ZM42.429 81.973l-1.297 1.097.755.892 1.296-1.098-.754-.891ZM44.481 81.743l-1.296 1.098.755.891 1.296-1.098-.755-.89ZM43.927 83.743 42.63 84.84l.755.891 1.296-1.097-.754-.891ZM45.99 83.526l-1.296 1.097.755.891 1.296-1.097-.755-.891ZM44.14 86.623l3.527 4.167 2.606-2.206-3.528-4.167-2.605 2.206Zm5.413 1.902-1.825 1.545-1.02-1.205 1.825-1.545 1.02 1.205ZM50.026 99.778l-.064-2.144c.008-.373.008-.653.027-1.014l-.01-.013-1.423 1.205-.67-.791 2.656-2.249.51.603.062 2.038c.004.362.01.702-.03 1.037l.011.013 1.561-1.322.68.804-2.832 2.398-.478-.565ZM51.665 92.27c.234.276.211.683-.116.96-.315.267-.72.222-.954-.054-.257-.278-.234-.685.093-.962.338-.265.733-.233.977.056Zm2.464 5.004-2.73-3.226 1.006-.853 2.731 3.226-1.007.852ZM54.125 93.593c-.362-.427-.682-.78-.94-1.059l.869-.735.433.41.012-.011c-.047-.542.158-1.039.637-1.444.704-.597 1.867-.525 2.739.504.998 1.18.723 2.361-.007 2.979-.39.33-.83.423-1.151.35l-.013.01 1.36 1.607-1.006.853-2.933-3.464Zm1.655-.087c.063.075.14.14.206.192a.794.794 0 0 0 .995-.024c.44-.373.384-.95-.084-1.503-.435-.514-.991-.711-1.444-.328-.29.245-.36.672-.169 1.026.03.061.07.135.124.197l.372.44Z" />
          </g>
          <defs>
            <filter
              id="a"
              x="58.503"
              y="9.699"
              width="87.776"
              height="95.103"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="11" />
              <feGaussianBlur stdDeviation="11" />
              <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.27 0" />
              <feBlend
                in2="BackgroundImageFix"
                result="effect1_dropShadow_2326_10201"
              />
              <feBlend
                in="SourceGraphic"
                in2="effect1_dropShadow_2326_10201"
                result="shape"
              />
            </filter>
            <filter
              id="b"
              x="116.12"
              y="50.857"
              width="94.755"
              height="94.229"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="11" />
              <feGaussianBlur stdDeviation="11" />
              <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.27 0" />
              <feBlend
                in2="BackgroundImageFix"
                result="effect1_dropShadow_2326_10201"
              />
              <feBlend
                in="SourceGraphic"
                in2="effect1_dropShadow_2326_10201"
                result="shape"
              />
            </filter>
            <filter
              id="d"
              x="131.261"
              y="52.633"
              width="84.359"
              height="82.996"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="11" />
              <feGaussianBlur stdDeviation="11" />
              <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.27 0" />
              <feBlend
                in2="BackgroundImageFix"
                result="effect1_dropShadow_2326_10201"
              />
              <feBlend
                in="SourceGraphic"
                in2="effect1_dropShadow_2326_10201"
                result="shape"
              />
            </filter>
            <filter
              id="f"
              x=".075"
              y="56.556"
              width="92.367"
              height="87.26"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="11" />
              <feGaussianBlur stdDeviation="11" />
              <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.27 0" />
              <feBlend
                in2="BackgroundImageFix"
                result="effect1_dropShadow_2326_10201"
              />
              <feBlend
                in="SourceGraphic"
                in2="effect1_dropShadow_2326_10201"
                result="shape"
              />
            </filter>
            <linearGradient
              id="c"
              x1="166.469"
              y1="60.189"
              x2="160.562"
              y2="113.119"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#68728B" />
              <stop offset=".996" stopColor="#646E87" />
            </linearGradient>
            <linearGradient
              id="e"
              x1="188.362"
              y1="60.697"
              x2="158.84"
              y2="105.025"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#68728B" />
              <stop offset=".996" stopColor="#646E87" />
            </linearGradient>
            <clipPath id="g">
              <path
                fill="#fff"
                transform="rotate(-40.252 116.86 -2.135)"
                d="M0 0h11.495v34.043H0z"
              />
            </clipPath>
          </defs>
        </svg>
      )}

      {description && <S.Description>{description}</S.Description>}

      {!!added && (
        <S.Sub>
          <S.Icon>
            <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24">
              <path
                fill="currentColor"
                d="M6 22q-.825 0-1.412-.587Q4 20.825 4 20V4q0-.825.588-1.413Q5.175 2 6 2h9l5 5v13q0 .825-.587 1.413Q18.825 22 18 22Zm0-2h12V8h-4V4H6v16Zm6-1q1.675 0 2.838-1.175Q16 16.65 16 15v-4h-2v4q0 .825-.575 1.413Q12.85 17 12 17q-.825 0-1.412-.587Q10 15.825 10 15V9.5q0-.225.15-.363Q10.3 9 10.5 9q.225 0 .363.137.137.138.137.363V15h2V9.5q0-1.05-.725-1.775Q11.55 7 10.5 7q-1.05 0-1.775.725Q8 8.45 8 9.5V15q0 1.65 1.175 2.825Q10.35 19 12 19Zm0-7Z"
              />
            </svg>
          </S.Icon>

          <span className="ellipsis">{fileName[0]}</span>
          {fileName[1] && `.${fileName[1]}`}
        </S.Sub>
      )}

      {!added && sub && <S.Sub>{sub}</S.Sub>}
    </S.Wrapper>
  )
}
