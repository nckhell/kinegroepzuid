import {
  Children,
  cloneElement,
  isValidElement,
  ReactNode,
  useEffect,
  useRef,
  useState,
} from 'react'

interface MapProps {
  children: ReactNode
}

export const Map = ({ children }: MapProps) => {
  const ref = useRef<HTMLDivElement>(null)
  const [map, setMap] = useState<google.maps.Map>()

  useEffect(() => {
    if (ref.current && !map) {
      setMap(
        new window.google.maps.Map(ref.current, {
          center: { lat: 51.19557875111246, lng: 4.400018584656759 },
          zoom: 16,
        })
      )
    }
  }, [ref, map])

  return (
    <>
      <div ref={ref} className="w-[full] h-[400px] rounded-lg" />
      {Children.toArray(children).map((child) => {
        if (isValidElement(child)) {
          // set the map prop on the child component
          //@ts-expect-error no clue
          return cloneElement(child, { map })
        }
      })}
    </>
  )
}
