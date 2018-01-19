#version 330 core
out vec4 FragColor;

in vec2 TexCoords;

uniform sampler2D FrameMap;

void main()
{
	FragColor = texture(FrameMap, TexCoords);
}