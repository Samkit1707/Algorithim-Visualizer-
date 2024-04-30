import pygame
import sys

# Initialize Pygame
pygame.init()

# Set up the screen
screen_width = 800
screen_height = 600
screen = pygame.display.set_mode((screen_width, screen_height))
pygame.display.set_caption("TCP/IP Data Transmission Animation")

# Define colors
WHITE = (255, 255, 255)
BLACK = (0, 0, 0)
RED = (255, 0, 0)

# Define the animation parameters
start_x = 100
start_y = 75
end_x = 750  # Adjust the end x-coordinate for horizontal movement
end_y = 525  # Adjust the end y-coordinate for vertical movement
arrow_speed = 1 # Adjust the speed as needed

# Main animation loop
def animate():
    global start_x, start_y

    # Clear the screen
    screen.fill(WHITE)

    # Draw layers
    # Edit the positions of the layers here
    draw_layer("Application", 100, 50)
    draw_layer("Transport", 100, 200)
    draw_layer("Internet", 100, 350)
    draw_layer("Link", 100, 500)


    # Draw arrow
    pygame.draw.line(screen, RED, (100, start_y + 25), (screen_width - 100, start_y + 25), 3)

    # Move arrow
    start_y += arrow_speed

    # Check if arrow reaches the end
    if start_y > end_y:
        start_y = 75  # Reset arrow position

    # Update the display
    pygame.display.flip()

    # Cap the frame rate
    pygame.time.Clock().tick(30)

    # Event handling
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            pygame.quit()
            sys.exit()

# Function to draw a layer with name at (x, y)
def draw_layer(name, x, y):
    pygame.draw.rect(screen, BLACK, (x, y, 150, 50))
    font = pygame.font.SysFont(None, 20)
    text = font.render(name, True, WHITE)
    text_rect = text.get_rect(center=(x + 75, y + 25))
    screen.blit(text, text_rect)

# Start the animation
while True:
    animate()
