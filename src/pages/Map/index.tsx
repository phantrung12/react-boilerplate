import React from 'react';
import { TransformComponent, TransformWrapper } from 'react-zoom-pan-pinch';

const Map = () => {
  return (
    <div style={{ width: '1024px', height: '1024px', overflow: 'hidden', border: '1px solid' }}>
      <TransformWrapper
        initialScale={1} // Tỷ lệ ban đầu của ảnh
        minScale={0.5} // Tỷ lệ zoom nhỏ nhất
        maxScale={3} // Tỷ lệ zoom lớn nhất
      >
        {() => (
          <>
            {/* Vùng zoomable */}
            <TransformComponent>
              <div style={{ position: 'relative', width: '1024px', height: '1024px' }}>
                {/* Ảnh nền */}
                <img
                  src="https://media.valorant-api.com/maps/7eaecc1b-4337-bbf6-6ab9-04b8f06b3319/displayicon.png" // Thay bằng đường dẫn ảnh của bạn
                  alt="Map"
                  style={{ width: '100%', height: '100%', rotate: '90deg' }}
                />

                <svg
                  style={{
                    width: '100%',
                    height: '100%',
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                  }}
                >
                  <g cursor={'pointer'}>
                    <circle cx={720} cy={900} r={3} fill="red" stroke="yello" strokeWidth={2} />
                  </g>
                </svg>

                {/* {coordinates.map(point => (
                  <div
                    key={point.regionName}
                    style={{
                      position: 'absolute',
                      top: `${point.location.y}px`,
                      left: `${point.location.x}px`,
                      transform: 'translate(-50%, -50%)', // Căn giữa điểm
                      cursor: 'pointer',
                    }}
                  >
                    <div
                      style={{
                        width: '12px',
                        height: '12px',
                        backgroundColor: 'red',
                        borderRadius: '50%',
                        border: '2px solid white',
                      }}
                      title={point.regionName}
                    >
                      {point.regionName}
                    </div>
                  </div>
                ))} */}
              </div>
            </TransformComponent>
          </>
        )}
      </TransformWrapper>
    </div>
  );
};

export default Map;
